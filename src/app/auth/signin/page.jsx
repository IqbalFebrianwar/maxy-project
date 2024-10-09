import dynamic from "next/dynamic";

const FormAuth = dynamic (()=> import("@/app/auth/signin/components/form"))

const AuthSignin = () => {
  return (
    <main className="w-full bg-gray-100 min-h-screen justify-center items-center flex">
        <FormAuth />
    </main>
  );
};
export default AuthSignin
