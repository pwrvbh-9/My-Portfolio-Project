import Link from "next/link"
import {FaGithub, FaLinkedin} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/pwrvbh-9"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/vaibhav-panwar99"}
] 

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
        </Link>
    ))}
    </div>
  )
}

export default Social