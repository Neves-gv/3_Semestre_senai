const Aula11_produto = ({ novoProduto }) => {
    return (
        <div style={estilos.cardProduto}>
            <img src={novoProduto.img} alt="" style={estilos.produtoImagem} />
            <h2 style={estilos.nomeProduto}>{novoProduto.nome}</h2>
            <p style={estilos.preco}>R$ {Number(novoProduto.preco).toFixed(2)}</p>
            <p>{novoProduto.categoria}</p>
            {produto.freteGratis == true && <p>frete Gratis</p>}
            {/* {produto.freteGratis && <p>frete Gratis</p>} */}
            <a href={novoProduto.link} style={estilos.botao}>Ver produto</a>
        </div>
    )
}

const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250
    },

    produtoImagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },

    nomeProduto: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },

    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },

    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },

    freteGratis: {
        fontWeight: "bold"
    }
};

export default Aula11_produto;