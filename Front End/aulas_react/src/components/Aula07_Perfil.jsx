const Aula07_Perfil = () => {
    return (
        <div style={estilos.container}>
            <div style={estilos.card}>
                <Img />
                <Nome />
                <Entrar />
            </div>
        </div>
    );
};

export const Img = () => {
    return (
        <img
            style={estilos.imagem}
            src="data:image/jpeg;base64,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"
            alt="Perfil"
        />
    );
};

export const Nome = () => {
    return <span style={estilos.titulo}>Neves</span>;
};

const Entrar = () => {
    return (
        <button style={estilos.botao}>Seguir</button>
    );
};

const estilos = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '20px'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#5f5f5f',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '350px'
    },
    imagem: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        marginBottom: '20px',
        objectFit: 'cover',
        border: '2px solid #ffffff'
    },
    titulo: {
        margin: '0 0 20px 0',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    botao: {
        width: '100%',
        padding: '14px',
        marginTop: '20px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#2b1ee4',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
};

export default Aula07_Perfil;