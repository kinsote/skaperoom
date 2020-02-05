import React from 'react';
import { useSelector, } from 'react-redux';
import RegistroModal from './RegistroModal';
import LoginModal from './LoginModal';


const Modals = () => {

    const currentModal = useSelector(s => s.modal)
    if (!currentModal) return false

    let TheModal
    if (currentModal.type === 'registro') TheModal = RegistroModal
    if (currentModal.type === 'login') TheModal = LoginModal


    if (!TheModal) {
        console.warn('Modal desconocido:', currentModal.type)
        return false
    }

    return (
        <div>
            <TheModal />
        </div>

    )
}

export default Modals
