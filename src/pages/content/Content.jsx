/* eslint-disable jsx-a11y/anchor-has-content */
import contact from '../../assets/contact.svg'
import avatar from '../../assets/Avatar-Maker.svg';
import perfil from '../../assets/perfil.png'
import cv from '../../assets/cv_GuilhermeDuarte.pdf';
function Content() {

  return (
    
    <div className="container-fluid">
      {/*APRESENTAÇÃO */}
      <div className="row" id="section-profile" style={{minHeight: "90vh"}}>
        <div className="col-lg-6 col-xl d-flex flex-column flex-wrap align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-start gap-3">
            <div>
              <div id="br2" className="mb-5"></div>
              <h1>
                Olá, meu nome é,
              </h1>
              <h1>Guilherme Duarte</h1>
              <h6>Desenvolvedor FullStack, apaixonado por tecnologia e negócios inovadores</h6>
            </div>
            <div className="d-flex gap-3 align-items-start">
            <a href="https://wa.me/5547933004238" id="button-profile" alt='linkwhatsapp' target="_blank" rel="noopener noreferrer">Vamos conversar <i className="bi bi-whatsapp"></i></a>
            <a href={cv} download="cv_GuilhermeDuarte.pdf" id="button-cv" alt='linkCurriculo'>Download CV <i className="bi bi-download"></i></a>
          </div>
          </div>
          
        </div>
        <div className="col-lg-6 col-xl-4 text-center d-none d-lg-flex flex-wrap align-items-center justify-content-center">
          <svg className="home__blob hover-effect-img" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" maskType="alpha">
              <rect width="100%" height="100%" fill="000000#" />
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" fill="#ffffff"></path>
            </mask>

            <g mask="url(#mask0)">
              {/* Ajuste a cor da forma aqui */}
              <rect width="100%" height="100%" fill="#fd6d58" />
              {/* Use xlinkHref para referenciar a imagem */}
              <image className="home__blob-img" x="6" y="35" width="175" height="160" xlinkHref={perfil}></image>
            </g>
          </svg>
        </div>
        <div className="col-1" id="divider"></div>
      </div>
      {/* SOBRE */}
      <div className="container-fluid" style={{ marginBottom: '10rem' }} id="sobre">
          <div className="container">
            <h1 className="text-center fw-bolder" style={{ marginBottom: '5rem' }} id="br">Sobre</h1>
            <div className="p-3 mb-4 rounded-3" style={{backgroundColor: 'var(--orange-light)'}}>
              <div className="container-fluid py-3">
                <div className='d-lg-flex'>
                    <div className=' col col-lg-5 fs-5 d-flex flex-column text-justify justify-content-center gap-3'>
                        <p className='text-justify'>🔧Desenvolvo soluções, como <strong >landing pages e APIs</strong>, que combinam criatividade e eficiência.</p>
                        <p className='text-justify'>
                        📚Atualmente, <strong>Graduando em Engenharia da Computação</strong> e aluno do curso Dev In House do Senai, onde aprofundo meus conhecimentos práticos em desenvolvimento web.
                        </p> 
                        <p className='text-justify'>🚀Tive a oportunidade de passar por algumas <strong>startups</strong> e também adquirir experiências em metologias ágeis como <strong>Scrum e Kanban</strong>.</p>
                    </div>
                      <div className="d-none d-lg-flex col-lg" ></div>
                      <div className="col-md-12 col-lg-4 d-flex justify-content-center align-content-center" >
                        <img className='img-fluid' src={avatar} alt='avatar'></img>
                        </div>
                      </div>
                </div>
              </div>
          </div>
      </div>
      {/*HABILIDADES */}
      <div id="skills">
          <h1 className="fw-bolder text-center" id="br" style={{ marginBottom: '10rem' }}>Habilidades</h1>

        <div className="text-center d-flex flex-column align-items-center justify-content-center gap-5">
          {/* Frontend */}
          <div className="row row-cols row-cols-md-6 rounded px-4 flex-row" style={{background: 'var(--orange-light)'}}>
            <div className="col ms-4 hover-effect">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>
              <h6 className="mt-1">JavaScript</h6>
            </div>
            <div className="col ms-4 hover-effect">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path></svg>
              <h6 className="mt-1">HTML</h6>
            </div>
            <div className="col ms-4 hover-effect">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100"><path fill="#3070b7" d="M83.105,15H16.895l5.842,66.211L50,89l27.263-7.789L83.105,15L83.105,15z"></path><path fill="#1f212b" d="M50,90c-0.093,0-0.185-0.013-0.274-0.039l-27.263-7.79c-0.398-0.114-0.686-0.461-0.722-0.874	l-5.843-66.21c-0.024-0.279,0.069-0.556,0.259-0.763S16.614,14,16.895,14h66.211c0.28,0,0.548,0.118,0.737,0.325	s0.283,0.484,0.259,0.763l-5.843,66.21c-0.036,0.413-0.323,0.76-0.722,0.874l-27.263,7.79C50.185,89.987,50.093,90,50,90z M23.673,80.438L50,87.96l26.327-7.522L82.014,16H17.986L23.673,80.438z"></path><polygon fill="#09ace3" points="50,20.5 50,82.963 71.811,76.732 76.709,20.5"></polygon><polygon fill="#fefdef" points="67.721,30.579 50,30.579 49,34 50,38.368 59.542,38.368 58.958,46.158 50,46.158 49,50 50,53.947 58.568,53.947 57.984,62.711 50,65.437 49,70 50,73.616 65.384,68.553 66.747,46.158 66.747,46.158"></polygon><path fill="#eeecd9" d="M50,30.579v7.789H32.668l-0.584-7.789H50z M41.042,46.158l0.389,7.789H50v-7.789H41.042z M41.821,57.842h-7.789l0.584,10.711L50,73.616v-8.179l-7.984-2.726L41.821,57.842z"></path><path fill="#1f212b" d="M50,31.079c-0.276,0-0.5-0.224-0.5-0.5V20.5c0-0.276,0.224-0.5,0.5-0.5h3.5	c0.276,0,0.5,0.224,0.5,0.5S53.776,21,53.5,21h-3v9.579C50.5,30.855,50.276,31.079,50,31.079z"></path><path fill="#1f212b" d="M60.5,21h-4c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h4c0.276,0,0.5,0.224,0.5,0.5	S60.776,21,60.5,21z"></path><path fill="#1f212b" d="M50,83.463c-0.107,0-0.213-0.035-0.301-0.101c-0.126-0.095-0.199-0.243-0.199-0.399V76.5	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5.8l20.843-5.955L76.163,21H63.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5	h13.209c0.141,0,0.273,0.059,0.368,0.162s0.143,0.242,0.13,0.381l-4.898,56.231c-0.018,0.207-0.161,0.38-0.36,0.438l-21.811,6.232	C50.092,83.457,50.046,83.463,50,83.463z"></path><path fill="#1f212b" d="M50,65.937c-0.276,0-0.5-0.224-0.5-0.5v-8.49c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v8.49	C50.5,65.713,50.276,65.937,50,65.937z"></path><path fill="#1f212b" d="M50,46.658c-0.276,0-0.5-0.224-0.5-0.5v-4.789c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4.789	C50.5,46.434,50.276,46.658,50,46.658z"></path><path fill="#1f212b" d="M50,74.116c-0.053,0-0.105-0.008-0.156-0.025L34.46,69.028c-0.195-0.064-0.332-0.242-0.343-0.448	l-0.585-10.71c-0.008-0.137,0.042-0.271,0.136-0.371c0.095-0.1,0.226-0.156,0.363-0.156h7.79c0.269,0,0.489,0.212,0.5,0.48	l0.181,4.526L50,64.909l7.508-2.564l0.526-7.897H41.432c-0.267,0-0.486-0.209-0.499-0.475l-0.39-7.79	c-0.007-0.137,0.042-0.271,0.137-0.37s0.226-0.155,0.362-0.155h17.452l0.509-6.789H32.668c-0.262,0-0.479-0.202-0.499-0.462	l-0.584-7.79c-0.01-0.139,0.038-0.276,0.133-0.377c0.095-0.102,0.228-0.16,0.366-0.16h35.637c0.138,0,0.27,0.057,0.364,0.158	s0.144,0.236,0.135,0.374l-2.337,37.973c-0.013,0.205-0.148,0.381-0.343,0.445l-15.384,5.063C50.105,74.107,50.053,74.116,50,74.116	z M35.097,68.185L50,73.089l14.905-4.906l2.283-37.104H32.623l0.509,6.79h26.41c0.139,0,0.271,0.058,0.366,0.16	c0.095,0.102,0.143,0.238,0.133,0.377l-0.584,7.789c-0.02,0.261-0.237,0.462-0.499,0.462H41.567l0.34,6.79h16.661	c0.139,0,0.271,0.057,0.365,0.158s0.143,0.237,0.134,0.375l-0.584,8.763c-0.014,0.201-0.146,0.375-0.338,0.44l-7.984,2.727	c-0.104,0.036-0.219,0.036-0.322,0l-7.984-2.727c-0.196-0.067-0.33-0.247-0.339-0.453l-0.175-4.388H34.56L35.097,68.185z"></path></svg>
              <h6 className="mt-1">CSS</h6>
            </div>
            <div className="col ms-4 hover-effect">
              <img width="90" height="95" alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <h6 className="mt-1">React</h6>
            </div>
            <div className="col hover-effect">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="97" viewBox="0 0 48 48"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon></svg>
              <h6 >Vue</h6>
            </div>
          </div>
          {/* Back-end */}
          <div className="row row-cols  row-cols-md-6 d-flex mt-5 rounded px-4 " style={{background: 'var(--orange-light)'}}>
            <div className="col ms-4 hover-effect">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="100" viewBox="0 0 64 64"><path fill="#b5c4e0" d="M32 14A31 18.174 0 1 0 32 50.348A31 18.174 0 1 0 32 14Z"></path><path fill="#ced9ed" d="M32,14C14.879,14,1,22.137,1,32.174s13.879,18.174,31,18.174s31-8.137,31-18.174S49.121,14,32,14z M32,45.348c-15.322,0-26-6.942-26-13.174C6,25.943,16.678,19,32,19s26,6.943,26,13.174C58,38.405,47.322,45.348,32,45.348z"></path><path fill="#8d6c9e" d="M42.435 26.435l-2.733 14.826h3.566l.71-4.043h2.219c4.645 0 7.172-1.076 8.117-5.062.813-3.425-1.264-5.72-4.69-5.72H42.435zM46.786 34.522h-2.305l1.018-5.391h2.778c2.302 0 2.786 1.038 2.666 2.193C50.634 34.297 48.78 34.522 46.786 34.522zM14.13 26.435l-2.733 14.826h3.566l.71-4.043h2.219c4.645 0 7.172-1.076 8.117-5.062.813-3.425-1.264-5.72-4.69-5.72H14.13zM18.481 34.522h-2.305l1.018-5.391h2.778c2.302 0 2.786 1.038 2.666 2.193C22.329 34.297 20.476 34.522 18.481 34.522zM39.311 27.415c-.762-.698-2.104-.98-4.105-.98h-3.153l1.124-5.391H29.64l-3.379 16.174h3.538l1.706-8.087h2.828c.902 0 1.497.151 1.775.449.276.301.337.867.177 1.686l-1.291 5.952h3.593l1.399-6.44C40.286 29.234 40.059 28.102 39.311 27.415z"></path><path fill="#8d6c9f" d="M32 51.348c-17.645 0-32-8.602-32-19.174S14.355 13 32 13c17.645 0 32 8.602 32 19.174S49.645 51.348 32 51.348zM32 15C15.458 15 2 22.704 2 32.174s13.458 17.174 30 17.174 30-7.704 30-17.174S48.542 15 32 15zM58.693 50.667c-.33 0-.653-.163-.845-.463l-1.074-1.687c-.297-.466-.159-1.084.307-1.381.464-.296 1.083-.16 1.381.307l1.074 1.687c.297.466.159 1.084-.307 1.381C59.063 50.616 58.877 50.667 58.693 50.667zM54.446 53.004c-.375 0-.734-.212-.905-.573l-.854-1.809c-.235-.499-.021-1.096.478-1.331.501-.237 1.095-.021 1.331.478l.854 1.809c.235.499.021 1.096-.478 1.331C54.734 52.974 54.589 53.004 54.446 53.004zM49.969 54.817c-.414 0-.802-.26-.945-.673l-.654-1.891c-.181-.522.097-1.092.618-1.272s1.091.097 1.272.618l.654 1.891c.181.522-.097 1.092-.618 1.272C50.188 54.8 50.077 54.817 49.969 54.817zM45.344 56.171c-.451 0-.86-.308-.971-.766l-.47-1.944c-.13-.536.2-1.077.737-1.206.529-.131 1.076.2 1.206.737l.47 1.944c.13.536-.2 1.077-.737 1.206C45.501 56.162 45.422 56.171 45.344 56.171zM40.621 57.093c-.487 0-.914-.356-.988-.853l-.296-1.979c-.081-.546.295-1.055.842-1.137.552-.074 1.056.296 1.137.842l.296 1.979c.081.546-.295 1.055-.842 1.137C40.72 57.089 40.67 57.093 40.621 57.093zM35.841 57.596c-.522 0-.963-.406-.997-.936l-.129-1.996c-.035-.551.383-1.026.934-1.063.544-.027 1.027.383 1.063.934l.129 1.996c.035.551-.383 1.026-.934 1.063C35.885 57.595 35.862 57.596 35.841 57.596z"></path><g><path fill="#8d6c9f" d="M21.862,21.161c-0.448,0-0.856-0.304-0.97-0.759c-0.133-0.536,0.194-1.079,0.729-1.212 c1.345-0.334,2.766-0.618,4.224-0.845c0.547-0.084,1.057,0.289,1.142,0.834c0.085,0.546-0.289,1.057-0.834,1.142 c-1.4,0.218-2.762,0.49-4.049,0.81C22.023,21.152,21.942,21.161,21.862,21.161z"></path></g><g><path fill="#8d6c9f" d="M6.999,29.997c-0.163,0-0.328-0.04-0.481-0.124c-0.481-0.266-0.659-0.869-0.396-1.352 c0.109-0.2,2.767-4.925,11.424-8.091c0.516-0.191,1.092,0.077,1.282,0.596c0.19,0.519-0.077,1.093-0.596,1.282 c-7.884,2.883-10.334,7.133-10.357,7.175C7.692,29.812,7.35,29.997,6.999,29.997z"></path></g></svg>
              <h6 className="mt-1">PHP</h6>
            </div>
            <div className="col ms-4 hover-effect">
              <img width="100" height="100" alt="laravel" className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"/>
              <h6 className="mt-1">Laravel</h6>
            </div>
            <div className="col ms-4 hover-effect">
              <img  width="100" height="100" alt="postgre" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
              <h6 className="mt-1">PostgreSql</h6>
            </div>
            <div className="col ms-4 hover-effect">
              <img width="100" height="100" alt="docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
              <h6 className="mt-1">Docker</h6>
          </div>
          <div className="col hover-effect">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
            <path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"></path><path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"></path><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"></path><path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"></path><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"></path><path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"></path><path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"></path><g><path fill="#a3a3cd" d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z"></path><path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z"></path></g><g><path fill="#565fa1" d="M50 29.167A20.5 20.5 0 1 0 50 70.167A20.5 20.5 0 1 0 50 29.167Z"></path></g><g><path fill="#472b29" d="M69.424,44.625c-0.214,0-0.412-0.139-0.478-0.354c-0.088-0.287-0.183-0.571-0.284-0.853 c-0.392-1.094-0.886-2.159-1.47-3.169c-0.139-0.238-0.057-0.545,0.182-0.683c0.239-0.141,0.545-0.057,0.683,0.183 c0.614,1.061,1.134,2.182,1.546,3.331c0.106,0.297,0.206,0.595,0.298,0.897c0.081,0.264-0.067,0.544-0.332,0.625 C69.521,44.618,69.472,44.625,69.424,44.625z"></path></g><g><path fill="#472b29" d="M50,70.75c-11.511,0-20.875-9.337-20.875-20.813S38.489,29.125,50,29.125 c5.975,0,11.674,2.56,15.636,7.023c0.299,0.337,0.588,0.685,0.865,1.041c0.169,0.218,0.13,0.531-0.087,0.701 c-0.218,0.171-0.532,0.131-0.702-0.088c-0.264-0.339-0.54-0.669-0.824-0.99c-3.772-4.25-9.199-6.688-14.888-6.688 c-10.959,0-19.875,8.888-19.875,19.813S39.041,69.75,50,69.75s19.875-8.888,19.875-19.813c0-0.995-0.075-1.996-0.222-2.973 c-0.041-0.272,0.147-0.527,0.42-0.568c0.278-0.045,0.528,0.147,0.569,0.42c0.154,1.025,0.233,2.076,0.233,3.121 C70.875,61.413,61.511,70.75,50,70.75z"></path></g><g><path fill="#fefdef" d="M61.496,42.088c0.365-1.671,0.206-3.743-0.486-5.818c-3.622,0-6.339,2.716-6.339,2.716 s0.016,0.018,0.02,0.023C54.627,39.008,54.565,39,54.5,39h-9c-0.043,0-0.085,0.006-0.128,0.006c0.003-0.004,0.017-0.02,0.017-0.02 s-2.717-2.716-6.339-2.716c-0.684,2.053-0.85,4.104-0.5,5.767C36.973,43.732,36,46,36,48.5c0,5.247,4.253,9.5,9.5,9.5h1.073 c-1.304,0.709-2.246,1.979-2.493,3.498c-1.72,0.232-3.979,0.18-5.028-1.394c-1.811-2.717-2.717-2.717-3.622-2.717 s-0.906,0.906,0,1.811c0.906,0.906,0.906,0.906,1.811,2.717c0.772,1.543,2.812,3.298,6.76,2.663v3.523 c0,0.447,0.079,0.871,0.191,1.282c2.425,0.577,6.502,1.061,11.665-0.151C55.943,68.868,56,68.493,56,68.102v-5.816 c0-1.858-1.047-3.456-2.573-4.286H54.5c5.247,0,9.5-4.253,9.5-9.5C64,46.025,63.046,43.779,61.496,42.088z"></path><path fill="#472b29" d="M49.532,70.486c-2.23,0-4.075-0.287-5.457-0.616c-0.178-0.042-0.319-0.179-0.367-0.355 c-0.142-0.522-0.208-0.972-0.208-1.413V65.15c-4.563,0.514-6.279-2.154-6.707-3.011c-0.87-1.739-0.87-1.739-1.717-2.587 c-0.701-0.701-0.979-1.458-0.745-2.023c0.169-0.408,0.569-0.642,1.098-0.642c1.217,0,2.219,0.211,4.038,2.939 c0.839,1.258,2.676,1.379,4.193,1.218c0.23-0.978,0.724-1.855,1.423-2.554C39.762,58.272,35.5,53.875,35.5,48.5 c0-2.442,0.891-4.78,2.513-6.613c-0.306-1.722-0.108-3.761,0.564-5.775c0.068-0.204,0.259-0.342,0.474-0.342 c3.357,0,5.931,2.16,6.552,2.73h8.854c0.621-0.57,3.195-2.73,6.552-2.73c0.215,0,0.406,0.138,0.474,0.342 c0.679,2.037,0.872,4.096,0.551,5.83c1.591,1.826,2.465,4.146,2.465,6.559c0,5.375-4.263,9.773-9.585,9.991 c1.001,0.997,1.585,2.354,1.585,3.794v5.816c0,0.392-0.052,0.8-0.158,1.246c-0.043,0.185-0.188,0.328-0.372,0.371 C53.582,70.28,51.419,70.486,49.532,70.486z M44.602,68.965c2.412,0.537,6.153,0.9,10.83-0.148 c0.045-0.253,0.068-0.489,0.068-0.715v-5.816c0-1.597-0.886-3.07-2.312-3.846c-0.201-0.109-0.302-0.341-0.246-0.563 c0.056-0.222,0.256-0.377,0.484-0.377H54.5c4.962,0,9-4.037,9-9c0-2.247-0.843-4.404-2.373-6.074 c-0.11-0.12-0.154-0.286-0.12-0.444c0.331-1.517,0.202-3.352-0.36-5.202c-2.87,0.153-5.098,2.074-5.542,2.484 c-0.091,0.151-0.245,0.246-0.429,0.246c-0.007,0-0.096-0.006-0.103-0.006L45.5,39.5c-0.152,0-0.332-0.067-0.442-0.181l-0.021,0.021 c-0.025-0.024-2.438-2.39-5.623-2.561c-0.557,1.831-0.69,3.649-0.373,5.154c0.034,0.159-0.013,0.325-0.124,0.444 C37.358,44.052,36.5,46.227,36.5,48.5c0,4.963,4.038,9,9,9h1.073c0.229,0,0.428,0.155,0.484,0.377 c0.057,0.222-0.044,0.453-0.246,0.563c-1.205,0.654-2.021,1.799-2.238,3.139c-0.036,0.218-0.208,0.386-0.427,0.415 c-2.664,0.358-4.568-0.198-5.511-1.611c-1.663-2.494-2.412-2.494-3.206-2.494c-0.137,0-0.18,0.032-0.181,0.032 c-0.025,0.064,0.043,0.435,0.534,0.926c0.963,0.963,0.998,1.033,1.905,2.847c0.369,0.736,1.911,3.093,6.233,2.392 c0.147-0.021,0.292,0.019,0.404,0.113c0.111,0.096,0.176,0.234,0.176,0.381v3.523C44.5,68.372,44.533,68.651,44.602,68.965z"></path></g><g><path fill="#fefdef" d="M60.437,51.362c-0.9,1.994-2.876,3.652-6.354,3.93"></path><path fill="#472b29" d="M54.083,55.542c-0.129,0-0.238-0.1-0.249-0.23c-0.011-0.138,0.091-0.258,0.229-0.269 c3.805-0.305,5.442-2.227,6.146-3.784c0.058-0.127,0.205-0.183,0.331-0.125c0.125,0.057,0.182,0.204,0.125,0.33 c-1.073,2.377-3.403,3.824-6.562,4.077C54.097,55.542,54.09,55.542,54.083,55.542z"></path></g><g><path fill="#fefdef" d="M60.959,47.41c0.111,0.753,0.109,1.552-0.03,2.342"></path><path fill="#472b29" d="M60.93,50.002c-0.015,0-0.029-0.001-0.044-0.004c-0.136-0.023-0.227-0.153-0.203-0.289 c0.129-0.734,0.139-1.517,0.029-2.263c-0.021-0.136,0.074-0.264,0.21-0.283c0.137-0.02,0.264,0.073,0.284,0.211 c0.12,0.809,0.109,1.624-0.031,2.421C61.155,49.917,61.049,50.002,60.93,50.002z"></path></g><g><path fill="#fefdef" d="M59.083,43.875c0.633,0.451,1.146,1.179,1.488,2.055"></path><path fill="#472b29" d="M60.571,46.181c-0.1,0-0.194-0.061-0.233-0.159c-0.334-0.856-0.818-1.528-1.4-1.942 c-0.112-0.08-0.139-0.236-0.059-0.349c0.081-0.113,0.236-0.138,0.349-0.06c0.662,0.472,1.207,1.222,1.576,2.169 c0.05,0.129-0.014,0.273-0.142,0.324C60.632,46.175,60.602,46.181,60.571,46.181z"></path></g>
            </svg>
            <h6>Github</h6>
          </div>
          </div>
        </div>
      </div>

      {/* Projetos */}

      <div className="container-fluid" id="projects">
        <div className="container">
          <h1 className="text-center fw-bolder mb-4" id="br"  style={{ marginTop: '10rem' }}>Projetos</h1>
          
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3" style={{ marginTop: '5rem' }} >
            <div className="col">
              <div className="card shadow-sm" style={{ height: '100%' }} >
              <a href='https://github.com/0Duarte/Projeto-DevInHouse-SENAI-FrontEnd' target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                <img className="bd-placeholder-img card-img-top" height="225" title='Deploy em breve ;)' src='https://raw.githubusercontent.com/0Duarte/Projeto-DevInHouse-SENAI-FrontEnd/main/Projeto-modulo-1/src/assets/screenshots/login.png' aria-label="Placeholder: Thumbnail" focusable="false"></img>
                </a>
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="card-text" >GymPro: Gerenciamento de alunos e treinos para academias, com login cadastros...</p>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <a type="button" class="btn btn-outline-success" href='https://github.com/0Duarte/Projeto-DevInHouse-SENAI-FrontEnd' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <div className='d-flex gap-1'>
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">Vue.js</span>
                        <span class="badge bg-success">Javasript</span>
                      </div>
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">Routes</span>
                        <span class="badge bg-success">Axios</span>
                      </div>
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">Rest</span>
                        <span class="badge bg-success">Yup</span>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ height: '100%' }}>
              <a href='https://funko-lab.vercel.app' target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
              <img className="bd-placeholder-img card-img-top" height="225" src='https://github.com/0Duarte/FunkoLab/raw/exercicio/FunkoLabProject/src/assets/screenshot1.png' aria-label="Placeholder: Thumbnail" focusable="false"></img>
              </a>
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="card-text">Biblioteca de Funkos. Nele o usuário pode adiciona-los ao carrinho e verificar os preços dos bonecos.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a type="button" class="btn btn-outline-success" href='https://github.com/0Duarte/FunkoLab' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <div className='d-flex gap-1'>
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">VueX</span>
                        <span class="badge bg-success">Vuetify</span>
                      </div>
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">Routes</span>
                        <span class="badge bg-success">JsonServer</span>
                      </div>
                      
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ height: '100%' }}>
              <a href='#home' target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
              <img className="bd-placeholder-img card-img-top" height="225" src='https://i.ibb.co/j4Dy0b7/screenshot.png' aria-label="Placeholder: Thumbnail" focusable="false"></img>
              </a>
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="card-text">Site portfolio criado com react e bootstrap, deploy no Vercel com domínio próprio</p>
                  <div className="d-flex justify-content-between align-items-center">
                  <a type="button" class="btn btn-outline-success disabled" href='#home'>
                        <i className="bi bi-github"></i>
                    </a>
                    <div className='d-flex gap-1'>
                      <div className='d-flex flex-column align-content-center gap-1'>
                        <span class="badge bg-success">React</span>
                        <span class="badge bg-success">Bootstrap</span>

                      </div>
                
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">Vercel</span>
                        <span class="badge bg-success">Responsividade</span>

                      </div>
                      <div className='d-flex flex-column gap-1'>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card shadow-sm" style={{ height: '100%' }}>
              <a href='https://landing-page-com-figma.vercel.app/' target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
              <img className="bd-placeholder-img card-img-top" height="225" src='https://i.ibb.co/fYqG78t/screenshot-landingpage.png' style={{ objectPosition: "50%" }} aria-label="Placeholder: Thumbnail" focusable="false"></img>
              </a>
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="card-text">Projeto para treinar habilidades de html e css utilizando o Figma e o conceito de Mobile First</p>
                  <div className="d-flex justify-content-between align-items-center">
                  <a type="button" class="btn btn-outline-success" href='https://github.com/0Duarte/Landing-page-com-figma'target="_blank" rel="noopener noreferrer" >
                        <i className="bi bi-github"></i>
                    </a>
                    <div className='d-flex gap-1'>
                      <div className='d-flex flex-column align-content-center gap-1'>
                        <span class="badge bg-success">Html</span>
                      </div>
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">Css</span>
                      </div>
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">Figma</span>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ height: '100%' }}>
              <a href='https://github.com/0Duarte/api_clientes' target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
              <img className="bd-placeholder-img card-img-top" height="225" src='https://jonathasguerra.com.br/blog/wp-content/uploads/2017/01/laravel-covercover-1140x640.jpg' style={{ objectPosition: "50%" }} alt='logo-laravel' focusable="false"></img>
              </a>
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="card-text">Api Sorteio para clientes: Realiza crud e verifica a existência de sorteios, envia um email com as informações para o cliente vencedor aleatório</p>
                  <div className="d-flex justify-content-between align-items-center">
                  <a type="button" class="btn btn-outline-success" href='https://github.com/0Duarte/api_clientes'target="_blank" rel="noopener noreferrer" >
                        <i className="bi bi-github"></i>
                    </a>
                    <div className='d-flex gap-1'>
                      <div className='d-flex flex-column align-content-center gap-1'>
                        <span class="badge bg-success">PostgreSQL</span>
                        <span class="badge bg-success">Laravel</span>
                      </div>
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">PHP</span>
                        <span class="badge bg-success">Docker</span>

                      </div>
                     
                      <div className='d-flex flex-column gap-1'>
                        <span class="badge bg-success">CRUD</span>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Contato */}
      <div className="container-fluid" id="contact">
          <div className="container">
            <h1 className="text-center fw-bolder mb-4" id="br"  style={{ marginTop: '5rem' }}>Contato</h1>

            <div className="p-3 mb-4 rounded-3" style={{backgroundColor: 'var(--orange-light)'}}>
              <div className="container-fluid py-3">
                <div>

                    <div>
                      <h1 className=" fw-bold">Vamos trabalhar juntos!</h1>
                    </div>
                    <div className="mt-5" >
                      {/* Linkedin */}
                      <div className="d-flex align-items-center gap-3">
                        <a href="https://www.linkedin.com/in/guilherme-oduarte" target="_blank" rel="noreferrer">
                          <i className="bi bi-linkedin fs-2" style={{color: "#fd6d58"}}></i>
                        </a>
                        <span>Guilherme Duarte</span>
                      </div>
                      {/* Email */}
                      <div className="d-flex align-items-center gap-3">
                        <a href="mailto:seuemail@email.com" target="_blank" rel="noreferrer">
                          <i className="bi bi-envelope fs-2" style={{color: "#fd6d58"}}></i>
                        </a>
                        <span>guiduartesbs@hotmail.com</span>
                      </div>
                      {/* Celular */}
                      <div className="d-flex align-items-center gap-3">
                        <a href="https://wa.me/5547933004238" target="_blank" rel="noreferrer">
                          <i className="bi bi-whatsapp fs-2" style={{color: "#fd6d58"}}></i>
                        </a>
                        <span>(47) 9 3300-4238</span>
                      </div>
                      {/* Github */}
                      <div className="d-flex align-items-center gap-3 text-decoration-none">
                        <a href="https://github.com/0Duarte" target="_blank" rel="noreferrer">
                          <i className="bi bi-github fs-2" style={{color: "#fd6d58"}}></i>
                        </a>
                        <span>Github</span>
                      </div>
                      
                      <img src={contact} alt="" className=' d-none d-lg-flex'/>
                    </div>
                    
    
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Content;
