import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://images.ctfassets.net/0gwlbcfnpdat/4oJDg8Yft1htpTOEkCvhZc/6a9921913612be570407f2fb9e8c82cb/ig-login-325x644.png"
          alt="insta-login"
        />
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="flex flex-col items-center"
          >
            <img className="w-32 object-cover" src="https://i0.wp.com/socodigital.com/wp-content/uploads/2021/03/Instagram.png?fit=3500%2C3393&ssl=1" />
            <p className="text-sm italic my-10 text-center"> This App is created for learning purposes</p>
            <button onClick={() => signIn(provider.id, {
                callbackUrl: "/"
            })} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  console.log(providers)
  return {
    props: { providers },
  };
}
