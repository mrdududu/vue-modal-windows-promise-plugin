<script setup lang="ts"></script>
<template>
  <div class="button"><slot /></div>
</template>
<style scoped>
.button {
  border: 1px solid #000;
  padding: 4px 8px;
  background-color: #fff;
  color: #555;
  font-size: 12px;
  display: inline-block;
  border-radius: 6px;
  cursor: pointer;
}
.button:hover {
  background-color: #ddd;
  color: #000;
}
</style>
