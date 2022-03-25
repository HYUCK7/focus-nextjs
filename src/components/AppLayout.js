import Link from "next/link";

const AppLayout = () => {
  return (
    <>
      <Link href="/count">
        <a>
          <h2>to Count</h2>
        </a>
      </Link>
      <Link href="/calc">
        <a>
          <h2>to Calc</h2>
        </a>
      </Link>
      <Link href="/bmi">
        <a>
          <h2>to Bmi</h2>
        </a>
      </Link>
    </>
  );
};

export default AppLayout;