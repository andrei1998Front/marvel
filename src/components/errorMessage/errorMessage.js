import img from './error.gif';

const styleImg = {
    display: 'block',
    width: '250px',
    height: '250px',
    objectFit: 'contain',
    margin: "0 auto",
}

const ErrorMessage = () => {
    return (
        // <img src={`${process.env.PUBLIC_URL}/error.gif`}/> если в паблик
        <img style={styleImg} src={img} alt="error"/>
    );
}

export default ErrorMessage;