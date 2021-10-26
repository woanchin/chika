import React from "react";
import Link from "next/link";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

const BlogLayout = ({ title, publishedAt, summary, id }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Link href={`posts/${id}`} passHref>
      <ChakraLink w="100%" _hover={{ textDecoration: "none" }}>
        <Box mb={10} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={["column", "row"]}
          >
            <Flex
              flexDirection="column"
              width="100%"
              align="flex-start"
              justifyContent="start"
            >
              <Heading size="md" as="h3" mb={1} fontWeight="medium">
                {title}
              </Heading>
            </Flex>
            <Text
              color="gray.500"
              minWidth="140px"
              textAlign={["left", "right"]}
              mb={[4, 0]}
            >
              {format(parseISO(publishedAt), "MMMM dd, yyyy")}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </ChakraLink>
    </Link>
  );
};

export default BlogLayout;
