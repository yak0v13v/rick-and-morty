"use client";

import { attach } from "effector";
import { createGate, useGate } from "effector-react";
import { useRouter } from "next/navigation";

type Router = ReturnType<typeof useRouter>;

const routerGate = createGate<Router>();

const routerPushFx = attach({
  source: routerGate.state,
  effect(router, url: string) {
    router.push(url);
  },
});

const RouterGate = () => {
  const router = useRouter();

  useGate(routerGate, router);

  return null;
};

export { RouterGate, routerPushFx };
