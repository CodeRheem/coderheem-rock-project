
function Footer() {
  return <footer>
    {<p className="bg-(--bg-green) py-[17px] text-center text-white text-base font-medium">
        Copyright &copy; {new Date().getFullYear()}
      </p>}
  </footer>;
}

export default Footer;
 