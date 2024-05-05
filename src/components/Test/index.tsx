import Image from "next/image";
import React, { useState } from "react";
import alramImage from "../../assets/images/alarm.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Test() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  return (
    <div>
      <button
        className="bg-green-600 text-white"
        onClick={() => setCount(count - 1)}
      >
        increment-{count}
      </button>
      <button
        className="bg-green-600 text-red-400"
        onClick={() => setCount(count - 1)}
      >
        decrement-{count}
      </button>
      <Image src={alramImage} alt={""} width={100} height={100} />
      <Link className="bg-green-600" href={"/"}>
        go to home
      </Link>
      <button className="bg-gray-600" onClick={() => router.push("/test")}>
        route to test
      </button>
    </div>
  );
}
