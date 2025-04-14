<script setup>
import { EditorView, basicSetup } from 'codemirror';
import { yaml } from '@codemirror/lang-yaml';
import { keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { onMounted, useTemplateRef } from 'vue';

// This is a Vue Template Ref to the editor container
const editorRef = useTemplateRef('editorRef');

// Load up the CodeMirror editor after the component has mounted
onMounted(() => {
  const editor = new EditorView({
    parent: editorRef.value,
    doc: `version: 1
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
  action: accept`,
    extensions: [
      basicSetup,
      keymap.of([indentWithTab]), // allows TAB key to keep focus and indent
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
