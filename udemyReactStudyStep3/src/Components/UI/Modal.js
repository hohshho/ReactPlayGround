const Modal = (props) => {
    const error_type = props.isModal;
    const error_msg = {
        1: 'name error',
        2: 'age error',
    };
    return <div>{error_msg.error_type}</div>;
};

export default Modal;
