import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/tema.module.scss';

export default function PaginaPadrao() {
    return (
        <>
            <div className={stylesTema.container}>
                <Outlet />
            </div>
        </>
    )
}