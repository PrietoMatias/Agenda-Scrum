import { Navigate } from "react-router-dom"; // Asumo que usás React Router para las rutas
import useAuth from "../hooks/useAuth";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated, loading } =  useAuth();

    if (loading) {
        // Mientras se verifica la autenticación, podés mostrar un spinner o un mensaje
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        // Si no está autenticado, redirige a la página de login (o donde quieras)
        return <Navigate to="/login" />;
    }

    // Si está autenticado, renderizá los hijos
    return <>{children}</>;
};

export default ProtectedRoute;
