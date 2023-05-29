import { useColorMode } from "@chakra-ui/color-mode";
import MainLayout from "../components/MainLayout";
import Head from "next/head";
import Link from "next/link";
import {
  Stack,
  Box,
  IconButton,
  Flex,
  HStack,
  Text,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import CitiPortfolio from "../components/CitiPortfolio";
import EndowusPortfolio from "../components/EndowusPortfolio";

import React from "react";

export default function Portfolio() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const colorTertiary = {
    light: "blue.700",
    dark: "blue.400",
  };
  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };
  const iconColor = {
    light: "black",
    dark: "white",
  };

  return (
    <MainLayout>
      <Head>
        <title>Chika</title>
      </Head>
      <Stack>
        <EndowusPortfolio 
          colorMode={colorMode} 
          colorSecondary={colorSecondary} 
          colorTertiary={colorTertiary} 
          iconColor={iconColor} />
          <Flex></Flex>
        <CitiPortfolio 
          colorMode={colorMode} 
          colorSecondary={colorSecondary} 
          colorTertiary={colorTertiary} 
          iconColor={iconColor} />
        <Flex ></Flex>
      </Stack>
    </MainLayout>
  );
}
