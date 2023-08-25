import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import { Suspense } from "react";

const SharedLayout = ({ total }) => {
  return (
    <>
      <Header total={total} />
      <Suspense fallback={<div>Загрузка</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
