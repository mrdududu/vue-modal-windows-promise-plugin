<script setup lang="ts">
import SampleModal from './SampleModal.vue'
import MyButton from './MyButton.vue'
import { useModalsPlugin } from '@/plugins/vue-modal-windows-promise-plugin'
import DefaultModalWrapper from '@/plugins/vue-modal-windows-promise-plugin/components/DefaultModalWrapper.vue'

type Props = { message: string }
type Emits = {
  (e: 'resolve', value?: any): void
}

defineProps<Props>()
const emits = defineEmits<Emits>()

const modalsPlugin = useModalsPlugin(DefaultModalWrapper)

const handleClickOpenModal = async () => {
  const result = await modalsPlugin.showModal(SampleModal, {
    message: `One more modal ${new Date().toLocaleString()}`
  })

  console.log(`Resolve value ${result.resolveValue}`)
}

const handleClickResolveModal = async () => {
  emits('resolve', { resolveValue: new Date().toLocaleString() })
}
</script>
<template>
  <div>
    <div>{{ message }}</div>
    <!-- <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
      diam quis. Ante metus dictum at tempor. Ac ut consequat semper viverra. Purus gravida quis
      blandit turpis. Amet venenatis urna cursus eget nunc. Lacinia at quis risus sed vulputate.
      Bibendum est ultricies integer quis. Nisi porta lorem mollis aliquam ut. Venenatis a
      condimentum vitae sapien pellentesque habitant morbi tristique senectus. Sagittis purus sit
      amet volutpat consequat. Id cursus metus aliquam eleifend. Consequat mauris nunc congue nisi.
      Elit eget gravida cum sociis. Luctus venenatis lectus magna fringilla urna porttitor rhoncus
      dolor. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Eget duis at tellus
      at urna condimentum mattis. Pellentesque dignissim enim sit amet venenatis. Dictum sit amet
      justo donec enim diam vulputate. Sed euismod nisi porta lorem. Enim neque volutpat ac
      tincidunt vitae. Gravida in fermentum et sollicitudin. Convallis aenean et tortor at.
      Pellentesque habitant morbi tristique senectus et netus et. Ut etiam sit amet nisl purus in. A
      lacus vestibulum sed arcu non. Lobortis feugiat vivamus at augue. Id velit ut tortor pretium
      viverra suspendisse. Tortor at risus viverra adipiscing at in tellus integer feugiat. Pharetra
      sit amet aliquam id diam maecenas ultricies mi eget. Libero volutpat sed cras ornare arcu dui
      vivamus. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Quam id leo in vitae
      turpis massa sed. Eleifend mi in nulla posuere sollicitudin aliquam. Sollicitudin tempor id eu
      nisl nunc mi ipsum faucibus vitae. Volutpat commodo sed egestas egestas fringilla phasellus
      faucibus scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit amet. Turpis in eu
      mi bibendum neque. Massa tincidunt nunc pulvinar sapien et. Habitasse platea dictumst quisque
      sagittis purus sit amet volutpat. Urna id volutpat lacus laoreet non curabitur gravida arcu
      ac. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Pellentesque nec
      nam aliquam sem et tortor consequat id. Maecenas sed enim ut sem viverra aliquet eget sit.
      Orci eu lobortis elementum nibh tellus. Eget nulla facilisi etiam dignissim. Imperdiet dui
      accumsan sit amet nulla facilisi morbi. Tempus imperdiet nulla malesuada pellentesque. Varius
      sit amet mattis vulputate enim nulla aliquet porttitor lacus. Parturient montes nascetur
      ridiculus mus mauris vitae ultricies leo. Quis hendrerit dolor magna eget est lorem ipsum
      dolor sit. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Porta lorem mollis
      aliquam ut porttitor leo a diam sollicitudin. Viverra suspendisse potenti nullam ac. Morbi
      blandit cursus risus at ultrices mi. Ultricies integer quis auctor elit. Vel risus commodo
      viverra maecenas. At risus viverra adipiscing at. Nec dui nunc mattis enim ut tellus elementum
      sagittis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Turpis cursus in
      hac habitasse platea dictumst quisque sagittis purus. Praesent semper feugiat nibh sed
      pulvinar proin gravida hendrerit lectus. Auctor augue mauris augue neque gravida. Tristique
      senectus et netus et malesuada fames. Sollicitudin ac orci phasellus egestas. Elementum
      facilisis leo vel fringilla est ullamcorper eget. Amet facilisis magna etiam tempor orci eu.
      Ultrices dui sapien eget mi proin sed. Morbi tempus iaculis urna id volutpat lacus laoreet
      non. Sodales ut eu sem integer vitae justo eget. Mattis molestie a iaculis at erat
      pellentesque. Dictumst quisque sagittis purus sit.
    </div> -->
    <div>
      <MyButton @click="handleClickOpenModal">Open modal</MyButton>
      <MyButton style="margin-left: 12px" @click="handleClickResolveModal">Resolve modal</MyButton>
    </div>
  </div>
</template>
