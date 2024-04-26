import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../../App.css"
import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../../../App.css"

export default function Header() {
    const [menu, setMenu] = useState(false)

    const navigate = useNavigate()
  const AccNumber = localStorage.getItem("AccNumber")
  const AccName = localStorage.getItem("AccName")

  const handleLogOut = () => {
    localStorage.removeItem("AccNumber")
    localStorage.removeItem("AccName")

    navigate("/banking")
  }
//     const handleMenu = () => {}
    return (
      <div className="flex items-center justify-between  p-5 bg-gray-100 ">
        <Link to="/">
      <img src="../images/logo21.png" className="w-40 h-50 cursor-pointer bg-blue-100 pl-2 pr-2 rounded" alt="" />
            </Link>
      <div className="hidden md:flex gap-3">

      <NavLink to="/" className="py-2 cursor-pointer px-2 text-blue-900 font-bold hover:text-white hover:bg-blue-900 hover:rounded rounded transition duration-300">
              Home
      </NavLink>

      <NavLink to="/about" className="py-2 cursor-pointer px-2 text-blue-900 font-bold hover:text-white hover:bg-blue-900 hover:rounded rounded transition duration-300">
              About
      </NavLink>

      <NavLink to="/customer" className="py-2 cursor-pointer px-2 text-blue-900 font-bold hover:text-white hover:bg-blue-900 hover:rounded rounded transition duration-300">
              Be Our Customer
      </NavLink>

      </div>
      <Flex
                display={["flex", "flex", "none"]}
                w={"100vw"}
                bg={"white"}
                zIndex={"20"}
                h={"100vh"}
                position={"fixed"}
                top={"0"}
                left={"0"}
                overflowY={"auto"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                className={`${menu && "open"} mobile_nav`}
              >
                <Flex
                  mt={".9rem"}
                  pl={"1.2rem"}
                  position={"absolute"}
                  top={"0"}
                  left={"0"}
                >
                </Flex>
                <Flex position={"absolute"} top={"0"} right={"0"}>
                  <Button
                    aria-label="Close Menu"
                    mt={4}
                    mr={8}
                    onClick={() => setMenu(false)}
                    bg={"none"}
                    _hover={{
                      bg: "none",
                    }}
                  >
                    <Icon as={AiOutlineClose} fontSize={"1rem"} />
                  </Button>
                </Flex>


                <Flex
                  mt={"8rem"}
                  pl={"1.2rem"}
                  pr={"2.7rem"}
                  gap={"2rem"}
                  flexDirection={"column"}
                  w={"100%"}
                >
      <NavLink to="/" className="py-2 cursor-pointer px-2 text-blue-900 font-bold hover:text-white hover:bg-blue-900 hover:rounded rounded transition duration-300">
              Home
      </NavLink>

      <NavLink to="/about" className="py-2 cursor-pointer px-2 text-blue-900 font-bold hover:text-white hover:bg-blue-900 hover:rounded rounded transition duration-300">
              About
      </NavLink>

      <NavLink to="/customer" className="py-2 cursor-pointer px-2 text-blue-900 font-bold hover:text-white hover:bg-blue-900 hover:rounded rounded transition duration-300">
              Be Our Customer
      </NavLink>

      <div className='mt-1 mr-4 sm:mr-0'>                
                        <button onClick={handleLogOut} className='text-red-900 px-3 p-2 rounded-lg font-bold border-gray-400 hover:bg-red-200 hover:border-gray-400 transition hover:text-red-900 duration-300 border-2 bg-red-100'>Logout</button>
                    </div>
                </Flex>


              </Flex>
      <Button onClick={() => setMenu(true)} display={["block", "block", "none"]}>
        <Icon as={HiMenuAlt4} fontSize={'1rem'} color={'#1e3a8a'} />
      </Button>
    </div>
    );
  }

