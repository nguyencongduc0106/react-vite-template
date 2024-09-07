export type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export type FailedQueueAxios = {
  resolve: (value?: unknown) => void
  reject: (reason?: unknown) => void
}
