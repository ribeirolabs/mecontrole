import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="p-4">
      <div className="bg-base-100 max-w-lg mx-auto p-4">
        <div className="flex justify-end items-center">
          <Link className="btn btn-sm gap-2" to="/login">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Entrar
          </Link>
        </div>
        <div className="divider"></div>
        <h1 className="text-4xl font-bold text-center">Me Controle</h1>
        <p className="text-center">Em breve</p>
      </div>
    </div>
  );
}
