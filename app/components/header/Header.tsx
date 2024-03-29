'use client';

import React, { useState, useLayoutEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import classes from "./Header.module.css"
import gsap from 'gsap'

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const currentRoute = usePathname();

  const [openMenu, setOpenMenu] = useState(false)

  let toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".headerAnimation",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.in",
          delay: 1
        }
      )
    }, headerRef)

    return () => ctx.revert();
  }, [])

  return (
    <header ref={headerRef} className={`${classes.headerContainer}`}>
      <div className={`${classes.headerWrapper} headerAnimation`}>
        <div className={`${classes.navWrapper}`}>
          <div className={classes.logoWrapper}>
            <svg width="35" height="35" viewBox="0 0 1449 1994" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M772.825 1887.34C772.825 1887.34 768.434 1919.05 737.82 1921.03L638.619 1920.86C638.619 1920.86 674.039 1921.03 674.039 1885.89L674.158 924.235L723.402 995.281L772.825 924.06V1887.34ZM639.213 70.5211H736.574C773.774 74.1346 772.825 108.171 772.825 108.171V808.371L725.598 878.484L674.158 804.874L674.277 105.84C674.039 70.5212 639.213 70.5211 639.213 70.5211ZM1161.08 1683.47V1066.73C1161.08 994.173 1234 994.173 1234 994.173C1234 994.173 1161.08 994.173 1161.08 925.809V309.769C1161.08 240.821 1234 235.984 1234 235.984H1090.24C1090.24 235.984 1015.25 235.984 1015.25 309.769V426.216C1015.25 473.249 1001.07 542.255 974.489 581.362L918.125 664.356L917.828 70.1715C917.828 70.1715 920.498 3.90489 845.148 0.407974L456.356 0C456.356 0 530.104 0.757654 529.807 70.9874V663.074L473.147 580.663C446.092 541.381 431.615 471.851 431.615 424.409V309.769C431.615 235.984 356.444 235.984 356.444 235.984H216.068C216.068 235.984 287.976 235.984 287.976 309.769V925.809C287.976 994.173 215.059 994.698 215.059 994.698C215.059 994.698 287.976 994.173 287.976 1066.73V1683.42C287.976 1752.42 215 1752.42 215 1752.42H357.571C357.571 1752.42 431.615 1752.42 431.615 1683.47V641.451L529.807 783.251V1921.03C530.401 1993.77 456.356 1993.77 456.356 1993.77L845.148 1994C923.583 1991.26 918.659 1921.44 918.659 1921.44L918.125 782.202L1015.25 641.451V1683.47C1015.25 1752.42 1089.23 1752.42 1089.23 1752.42H1233.17C1225.04 1752.3 1161.08 1749.51 1161.08 1683.47Z" fill="white" />
              <circle cx="1341.48" cy="997.475" r="107.475" fill="white" />
              <circle cx="107.475" cy="997.475" r="107.475" fill="white" />
            </svg>
          </div>
          <div className={classes.burgerMenu} onClick={toggleMenu}>
            <i className={openMenu ? classes.open : classes.close}></i>
            <i className={openMenu ? classes.open : classes.close}></i>
            <i className={openMenu ? classes.open : classes.close}></i>
          </div>
          <nav className={openMenu ? classes.mobileNavLinks : classes.mobileNavLinksClosed}>
            <ul>
              <li onClick={toggleMenu}><Link href="/" className={currentRoute === "/" ? classes.active : ""}>HOME</Link></li>
              <li onClick={toggleMenu}><Link href="/projects" className={currentRoute === "/projects" ? classes.active : ""}>PROJECTS</Link></li>
              <li onClick={toggleMenu}><Link href="/contact" className={currentRoute === "/contact" ? classes.active : ""}>CONTACT</Link></li>
            </ul>
          </nav>
          <nav className={classes.desktopNavLinks}>
            <ul>
              <li><Link href="/" className={currentRoute === "/" ? classes.active : ""}>HOME</Link></li>
              <li><Link href="/projects" className={currentRoute === "/projects" ? classes.active : ""}>PROJECTS</Link></li>
              <li><Link href="/contact" className={currentRoute === "/contact" ? classes.active : ""}>CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
