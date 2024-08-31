import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socialNavabrStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "16px"
}

const socials = [
  {
    key: 1,
    icon: faEnvelope,
    url: "mailto: mario@rossi.it",
  },
  {
    key: 2,
    icon: faGithub,
    url: "https://github.com",
  },
  {
    key: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    key: 4,
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    key: 5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState<String>("up");
  const prevScrollY = useRef<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleClick = (anchor: string) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setScrollDirection("down");
    } else if (currentScrollY < prevScrollY.current) {
      setScrollDirection("up");
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.transform =
        scrollDirection === "up" ? "translateY(0)" : "translateY(-200px)";
    }
  }, [scrollDirection]);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav style={socialNavabrStyle}>
            {socials.map( (social) => {
                return <a key={social.key} href={social.url}>{<FontAwesomeIcon size="xl" icon={social.icon} />}</a>;
              } 
            )}
          </nav>
          <nav>
            <HStack spacing={8}>
              {
                [
                  {link: "Projects", url: "/#projects-section", id: "projects", key: "1" },
                  {link: "Contact Me", url: "/#contact-me", id: "contactme", key:"2" }, 
                ].map( (internalLink) => {
                  return <a 
                    key={internalLink.key}
                    href={internalLink.url} 
                    id={internalLink.id}
                    onClick={handleClick(internalLink.id)}>
                      {internalLink.link}
                    </a>
                })
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
