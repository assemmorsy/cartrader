import { createGlobalState } from '@vueuse/core'
type ModalType = "location" | "price" | "make" | null
export const useModalStore = createGlobalState(
    () => {
        // state
        const openedModal = useState("modal", (): ModalType => {
            return null
        })
        // actions
        function closeModal() {
            openedModal.value = null
        }
        function openModal(targetModal: ModalType) {
            openedModal.value = targetModal
        }


        return { openedModal, closeModal, openModal }
    }
)