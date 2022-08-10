const Modal = (props) => {
    const error_type = props.isModal;
    const error_msg = {
        1: 'name error',
        2: 'age error',
    };
    console.log(error_msg[error_type]);

    const canelHandler = () => {
        props.onchangeModal();
    };

    return (
        <div>
            <p>{error_msg[error_type]}</p>
            <button onClick={canelHandler}>cancel</button>
        </div>
    );
};

export default Modal;
