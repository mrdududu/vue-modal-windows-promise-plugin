import modals from './modalsSingleton'
import ModalsPlugin from './components/ModalsPlugin.vue'
import type { App, Plugin, Component } from 'vue'
export type { Modal, Modals, ShowModalFn, HideModalFn } from './modalsSingleton'

export const useModalsPlugin = (defaultWrapperComp: Component) => {
  const showModal = (comp: Component, compProps: any, wrapperComp?: Component) => {
    if (wrapperComp) {
      return modals.showModal(comp, compProps, wrapperComp)
    }

    return modals.showModal(comp, compProps, defaultWrapperComp)
  }

  return { showModal }
}

const plugin: Plugin = {
  install(app: App, _) {
    app.component('ModalsPlugin', ModalsPlugin)
    app.provide('modals', modals)
  }
}
export default plugin
