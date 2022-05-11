import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Post from '../Pages/Post/Post'
import Comentario from '../Pages/Comentario/Comentario'
import Cadastro from '../Pages/Cadastro/Cadastro'

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="post" element={<Post/>}/>
                <Route path="comentario" element={<Comentario/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;