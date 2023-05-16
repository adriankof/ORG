import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://web.facebook.com/profile.php?id=100050444500100'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.linkedin.com/in/adrian-ochoa-uyasaba-92498b7a/'>
            <img src='/img/twitter.png' alt='linkedin' />
        </a>
        <a href='https://github.com/adriankof'>
            <img src='/img/instagram.png' alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado Adrian Ochoa proyecto Alura</strong>
</footer>
}

export default Footer