<script setup>
import { EditorView, basicSetup } from 'codemirror';
import { yaml } from '@codemirror/lang-yaml';
import { keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { linter, lintGutter } from '@codemirror/lint';
import { completeFromList, autocompletion } from '@codemirror/autocomplete';
import { load as loadYaml } from 'js-yaml';
import { onMounted, useTemplateRef } from 'vue';

// This is a Vue Template Ref to the editor container
const editorRef = useTemplateRef('editorRef');

let autocompletions = ['version', 'statement', 'description', 'match', 'prefix', 'scope', 'prefixes', 'action'];
const yamlCompletionSource = completeFromList(autocompletions);
// Parses the editor content and handles errors for linting
function yamlLinter() {
  return linter((view) => {
    const diagnostics = [];
    try {
      // I couldn't get the `onWarning` callback to work, so currently only catching one error at a time.
      loadYaml(view.state.doc.toString());
    } catch(e) {
      diagnostics.push({
        from: e.mark?.position || 0,
        to: e.mark?.position || 0,
        severity: 'error',
        message: e.message,
      });
    }
    return diagnostics;
  });
}

/* Sample YAML:
version: 1
statement:
- description: Statement 1. Drop default routes
  match:
    prefix:
      scope: exact
      prefixes:
      - ::/0
      - 0.0.0.0/0
  action: drop

- description: Statement 2. Drop specific prefixes
  match:
    prefix:
      scope: or-longer
      prefixes:
      - 2001:db8::/48
      - 3fff::/0
      - 192.0.2.0/24
  action: drop

- description: Statement 3. Accept all other routes
  action: accept
*/

// Load up the CodeMirror editor after the component has mounted
onMounted(() => {
  const editor = new EditorView({
    parent: editorRef.value,
    extensions: [
      basicSetup,
      keymap.of([indentWithTab]), // allows TAB key to keep focus and indent
      yamlLinter(),
      lintGutter(),
      autocompletion({
        override: [yamlCompletionSource],
      }),
      yaml(),
    ],
  });
});
</script>

<template>
  <div class="editor">
    <h1>YAML Editor</h1>
    <div class="editor-container" ref="editorRef"></div>
  </div>
</template>

<style lang="css" scoped>
.editor-container {
  margin-top: 20px;
}
.editor-container :deep(.cm-content),
.editor-container :deep(.cm-gutter) {
  min-height: 300px;
}
</style>
