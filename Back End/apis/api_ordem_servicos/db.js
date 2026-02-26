import { poll } from 'pg';

const BD = new poll({
    user: 'postgres',
    host: 'db.mmgkhiirbhbqkumpqydw.supabase.co',
    database: 'postgres',
    port: '5432',
    password: 'bancodedadossenai'
})

const testarConexao = async () =>{
    try{
        const cliente = await BD.connect()
        console.log('Conexão realizada com sucesso!');
        cliente.release(); //Liberar conxão
    }
    catch(error){
        console.error('Erro ao conectar ao banco de dados', error.message)
    }
}

export {BD, testarConexao};