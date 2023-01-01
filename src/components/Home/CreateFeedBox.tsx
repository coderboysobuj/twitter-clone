import {
  Avatar,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Icon,
  Input,
  HStack,
  IconButton,
  Divider,
  Image,
  Box,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { CgImage } from "react-icons/cg";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const CreateFeedBox: React.FunctionComponent = () => {
  const [image, setImage] = useState<File | undefined | null>(null);
  const [fileDataUrl, setFileDataUrl] = useState<string | undefined>(undefined);
  const imageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let fileReader: FileReader | undefined;
    let isCancel = false;

    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (result && !isCancel) {
          setFileDataUrl(result as string);
        }
      };
      fileReader.readAsDataURL(image);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [image]);

  return (
    <Flex gap={4} width="100%" padding={3}>
      <Avatar src="https://pbs.twimg.com/profile_images/1361270870837252097/f5LZgTHj_400x400.jpg" />
      <Stack spacing={3} width="100%">
        <Popover>
          <PopoverTrigger>
            <Button
              variant="outline"
              size="sm"
              color="blue.300"
              rounded="full"
              width="max-content"
              rightIcon={<Icon as={MdKeyboardArrowDown} fontSize="xl" />}
            >
              Trigger
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Input
          minW="100%"
          _placeholder={{ fontSize: "xl" }}
          size="lg"
          placeholder="What's happening?"
          variant="unstyled"
        />

        {fileDataUrl && (
          <Box position="relative">
            <Box
              rounded="full"
              zIndex="inherit"
              left={2}
              top={2}
              bg="black"
              position="absolute"
            >
              <IconButton
                onClick={() => {
                  setFileDataUrl(undefined);
                  setImage(null);
                }}
                aria-label="close-image-btn"
                rounded="full"
                icon={<Icon as={CgClose} fontSize="2xl" />}
              />
            </Box>
            <Image src={fileDataUrl} rounded="lg" />
          </Box>
        )}
        <Divider />

        <Flex justifyContent="space-between">
          <HStack spacing={0}>
            <IconButton
              colorScheme="blue"
              variant="ghost"
              rounded="full"
              fontSize="xl"
              aria-label="image-add"
              onClick={() => imageRef.current?.click()}
              icon={<Icon as={CgImage} />}
            />
            <input
              onChange={(e) => {
                const file = e.target.files?.item(0);
                if (!file) return;
                setImage(file);
              }}
              type="file"
              ref={imageRef}
              hidden
            />
            <IconButton
              aria-label="image-gif"
              rounded="full"
              fontSize="xl"
              colorScheme="blue"
              variant="ghost"
              icon={<Icon as={AiOutlineFileGif} />}
            />
            <IconButton
              colorScheme="blue"
              rounded="full"
              fontSize="xl"
              variant="ghost"
              aria-label="image-poll"
              icon={<Icon as={BiPoll} />}
            />
            <IconButton
              aria-label="image-emoji"
              colorScheme="blue"
              variant="ghost"
              rounded="full"
              fontSize="xl"
              icon={<Icon as={BsEmojiSmile} />}
            />
            <IconButton
              colorScheme="blue"
              rounded="full"
              fontSize="xl"
              variant="ghost"
              aria-label="image-location"
              icon={<Icon as={HiOutlineLocationMarker} />}
            />
          </HStack>
          <Button bg="blue.400" color="white" colorScheme="blue" rounded="full">
            Tweet
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default CreateFeedBox;
