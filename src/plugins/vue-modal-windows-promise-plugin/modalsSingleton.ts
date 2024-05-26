import { shallowRef, type Component, type Ref } from 'vue'

export type Modal = {
  comp: Component
  compProps: any
  resolve: (value: unknown) => void
  wrapperComp: Component
}
export type ShowModalFn = (comp: Component, compProps: any, wrapperComp: Component) => Promise<any>
export type HideModalFn = () => (value: any) => void
export type Modals = { modals: Ref<Modal[]>; showModal: ShowModalFn; hideModal: HideModalFn }

const createModals = () => {
  const modals = shallowRef<Modal[]>([])

  const showModal: ShowModalFn = (comp: Component, compProps: any, wrapperComp: Component) => {
    const promise = new Promise((resolve) => {
      modals.value = [...modals.value, { comp, compProps, resolve, wrapperComp }]
    })

    return promise
  }

  const hideModal: HideModalFn = () => {
    const modal = modals.value.pop()
    if (modal) {
      const { resolve } = modal
      modals.value = [...modals.value]

      return resolve
    }

    throw 'hideModal: Nothing to resolve'
  }

  return { modals, showModal, hideModal }
}

const modals = createModals()

export default modals
