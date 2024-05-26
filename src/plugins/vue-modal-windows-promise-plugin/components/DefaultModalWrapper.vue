<script setup lang="ts"></script>
<template>
  <Teleport to="body">
    <div class="shade">
      <div class="modal">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<style scoped>
.shade {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: rgb(0 0 0 / 0.3);
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 0;
  min-width: 400px;
  max-width: 90%;
  min-height: 300px;
  max-height: 90%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
}
.content {
  overflow: auto;
  padding: 0 10px;
  &::-webkit-scrollbar {
    /* Customize the background color of the scroll bar track */
    width: 2px;
    height: 2px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    /* Customize the color of the scroll bar thumb */
    background-color: #2279e9;
    border-radius: 1px;
  }
  &::-webkit-scrollbar-thumb:hover {
    /* Customize the color of the scroll bar thumb on hover */
    background-color: #1a5eb5;
  }
  &::-webkit-scrollbar-thumb:active {
    /* Customize the color of the scroll bar thumb on active (click) */
    background-color: #16519c;
  }
}
</style>
