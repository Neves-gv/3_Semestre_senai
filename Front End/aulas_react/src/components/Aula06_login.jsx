import React, { useState } from 'react';

const Aula06_login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const realizarLogin = () => {
        alert(`Login realizado com: ${email}`);
    };

    return (
        <div style={Estilos.container}>
            <div style={Estilos.card}>
                <img
                    style={Estilos.imagem}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmhaEK0AahY6v7bsr8h61jxmKMol_EbpZag&s" 
                    alt="Logo" 
                />

                <h1 style={Estilos.titulo}>Login</h1>

                <div style={{ width: '100%', marginBottom: '10px', textAlign: 'left' }}>
                    <label>E-mail</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        style={Estilos.input} 
                        placeholder="Ex: senai@senai.br" 
                    />
                </div>

                <div style={{ width: '100%', marginBottom: '20px', textAlign: 'left' }}>
                    <label>Senha</label>
                    <input 
                        type="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} 
                        style={Estilos.input} 
                        placeholder="Digite sua senha" 
                    />
                </div>

                <button style={Estilos.botao} onClick={realizarLogin}>
                    Entrar
                </button>
            </div>
        </div>
    );
};

const Estilos = {
    container: { display: 'flex', justifyContent: 'center', alignItems: 'center',
         minHeight: '50vh', backgroundColor: '#f0f2f5', padding: '20px' },
    card: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px',
         backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          width: '100%', maxWidth: '350px' },
    imagem: { width: '80px', height: '80px', borderRadius: '50%', marginBottom: '20px', objectFit: 'cover' },
    titulo: { margin: '0 0 25px 0', color: '#ff0000', fontSize: '24px' },
    input: { width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', 
        border: '1px solid #ccc', boxSizing: 'border-box' },
    botao: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none',
         backgroundColor: '#ff0000', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
};

export default Aula06_login;