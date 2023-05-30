import React from "react";
import Link from "next/link";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Spacer,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

const BlogLayout = ({ title, publishedAt, summary, id }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (<>
    <Box mb={2}/>
    <Link href={`posts/${id}`} passHref>
      <ChakraLink w="100%" _hover={{ textDecoration: "none" }}>
        <Box mb={10} display="block" width="100%">
           <Heading size="md" as="h3" mb={1} fontWeight="medium">
            Test {title}
          </Heading>
          <Text
            color="gray.500"
            mb={[4, 0]}
          >
            {format(parseISO(publishedAt), "MMMM dd, yyyy")}
          </Text>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </ChakraLink>
    </Link>
    </>);
};

export default BlogLayout;
