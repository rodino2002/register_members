
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer, } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export function Home() {

  const [isShow, setIsShow] = useState(false)
  const trocaPassword = () => setIsShow(!isShow)

  const isDark = false


  const navigate = useNavigate()

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  useEffect(() => {
    sessionStorage.clear()
  })

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (validate()) {
     
      if (password === "2024" && email === "pagaso.dev@divTecnologia.com") {
        sessionStorage.setItem('email', email)
        navigate("/notification")

      } else {
        toast.error("Credenciais Incorrectas")
      }
    }

  }

  const validate = () => {

    if (email === "" || email === null || password === "" || password === null) {

      toast.warning("preencha todos os campos")
      return false
    }

    return true
  }

  return (

    <div className={`${isDark && "dark"}`}>
      <div >
        <p className="flex justify-center bg-sky-50 p-12 text-2xl font-semibold">Sistema de Gestão de Membros</p>
      </div>
      <main className='min-h-screen bg-[#fff] dark:bg-[#fff]'>
        <div className="grid grid-cols-2 h-full ">
          <div className="flex justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
            logo
          </div>
          <div className="flex justify-center animate-fade py-[]">
            <div className="rounded-lg mt-[30%] md:mt-[18%] w-[250px] md:w-[350px] p-[20px] md:p-[40px] shadow-lg dark:bg-[#272729] bg-[#fff] ring-1 ring-[#EEE]">

              <div className="grid grid-cols-1 gap-4 place-items-center h-6 p-2"><svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="38" cy="38" r="37.5" stroke="#D4D4D4" />
                <path d="M37.5 19.7C32.3081 19.7 28.1 23.9081 28.1 29.1V30.6667C28.1 35.8586 32.3081 40.0667 37.5 40.0667C42.6919 40.0667 46.9 35.8586 46.9 30.6667V29.1C46.9 23.9081 42.6919 19.7 37.5 19.7ZM37.4969 44.7667C31.2209 44.7667 23.1682 48.1614 20.8511 51.1741C19.4192 53.0368 20.7823 55.7333 23.1307 55.7333H51.8662C54.2146 55.7333 55.5778 53.0368 54.1458 51.1741C51.8287 48.163 43.773 44.7667 37.4969 44.7667Z" fill="#D4D4D4" />
              </svg>
              </div>
              <br />
              <ToastContainer />
              <form className="mt-12" id="form" onSubmit={handleLogin}>
                <label htmlFor="email" className=" text-[#656565]" >Email</label>
                <input placeholder='Introduza seu email...' className="mt-1 block w-full p-1
                                rounded-md ring-1 ring-[#EEE] placeholder-[#838383]
                                focus:outline-none  text-sm
                                 "
                  type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <div>
                  <label htmlFor="senha" className=" text-[#656565]" >Senha</label>

                  <div className="flex justify-between bg-[#fff] rounded-md ring-1 ring-[#eee] ">
                    <input type={isShow ? "text" : "password"} id="senha" name="senha" placeholder='Introduza sua senha...' className="
                                     block w-50 p-2 text-sm
                                    rounded-md  placeholder-[#838383]
                                    focus:outline-none focus:border-[#fff] focus:ring-[#fff]
                                    " value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={trocaPassword} type="button" className="p-2">
                      {isShow && <svg width="16" height="11" viewBox="0 0 19 13" fill="none" className="animate-fade " xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.225958 5.77588C2.80141 1.98685 6.14077 0 9.48621 0C13.4153 0 16.7998 2.62712 18.7967 5.79248L18.7976 5.79397C18.9297 6.0047 19 6.25001 19 6.50061C19 6.75076 18.93 6.99562 18.7983 7.2061C16.8032 10.4122 13.4405 13 9.48621 13C5.48977 13 2.19193 10.4176 0.201723 7.22082C0.0664912 7.0053 -0.00364869 6.75354 0.00014624 6.4972C0.00395061 6.24021 0.0818876 5.99015 0.224108 5.77862L0.225958 5.77588ZM1.26662 6.51695L1.26837 6.51975C3.1066 9.47305 6.05285 11.7 9.48621 11.7C12.8811 11.7 15.8909 9.46358 17.7313 6.50563L17.7325 6.50369L17.7334 6.50061L17.7332 6.49925L17.7326 6.49766C15.8852 3.56993 12.8508 1.3 9.48621 1.3C6.66236 1.3 3.6734 2.97748 1.26662 6.51695ZM9.49966 3.9C8.1006 3.9 6.96643 5.06406 6.96643 6.5C6.96643 7.93594 8.1006 9.1 9.49966 9.1C10.8987 9.1 12.0329 7.93594 12.0329 6.5C12.0329 5.06406 10.8987 3.9 9.49966 3.9ZM5.69981 6.5C5.69981 4.34609 7.40106 2.6 9.49966 2.6C11.5983 2.6 13.2995 4.34609 13.2995 6.5C13.2995 8.65391 11.5983 10.4 9.49966 10.4C7.40106 10.4 5.69981 8.65391 5.69981 6.5Z" fill="#838383" />
                      </svg>
                      }
                      {!isShow && <svg width="16" height="11" viewBox="0 0 19 15" className="animate-fade" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.263 15C16.1809 15.0001 16.0995 14.984 16.0237 14.9525C15.9478 14.9211 15.8789 14.8749 15.8209 14.8167L2.06054 1.05628C1.94819 0.938026 1.88648 0.780563 1.88857 0.617464C1.89066 0.454365 1.95638 0.298534 2.07171 0.183196C2.18705 0.0678584 2.34288 0.0021395 2.50598 5.13208e-05C2.66908 -0.00203686 2.82654 0.0596711 2.9448 0.172018L16.7052 13.9324C16.7926 14.0199 16.8521 14.1313 16.8762 14.2526C16.9003 14.3739 16.8879 14.4996 16.8406 14.6138C16.7933 14.7281 16.7132 14.8258 16.6104 14.8945C16.5076 14.9632 16.3867 14.9999 16.263 15ZM9.36957 12.4981C7.74764 12.4981 6.18357 12.0181 4.72075 11.0713C3.38888 10.2112 2.18993 8.97944 1.25329 7.51388V7.51076C2.03278 6.3939 2.88655 5.44944 3.80365 4.68792C3.81194 4.68099 3.81871 4.67241 3.82352 4.66272C3.82833 4.65304 3.83108 4.64246 3.8316 4.63166C3.83211 4.62086 3.83038 4.61007 3.82651 4.59997C3.82264 4.58987 3.81672 4.58069 3.80912 4.57299L3.03041 3.79545C3.01657 3.7815 2.99799 3.77327 2.97836 3.7724C2.95872 3.77153 2.93949 3.77809 2.92447 3.79076C1.9503 4.61169 1.0461 5.6187 0.223995 6.79772C0.0825541 7.00072 0.00465716 7.2412 0.000202353 7.48858C-0.00425245 7.73596 0.0649361 7.97908 0.198976 8.18705C1.2314 9.80272 2.56013 11.1635 4.04094 12.1217C5.70821 13.2018 7.50253 13.7491 9.36957 13.7491C10.3773 13.7459 11.378 13.5799 12.3327 13.2573C12.3453 13.253 12.3566 13.2456 12.3656 13.2357C12.3745 13.2259 12.3808 13.2139 12.3838 13.201C12.3868 13.188 12.3864 13.1745 12.3828 13.1617C12.3791 13.1489 12.3723 13.1373 12.3628 13.1279L11.5192 12.2843C11.4998 12.2653 11.4758 12.2518 11.4495 12.2449C11.4233 12.2381 11.3957 12.2382 11.3695 12.2452C10.7162 12.4134 10.0442 12.4984 9.36957 12.4981ZM18.5632 6.81414C17.5288 5.21449 16.1868 3.85566 14.6826 2.88422C13.0184 1.80841 11.1811 1.23962 9.36957 1.23962C8.37247 1.24139 7.38279 1.41094 6.44197 1.74117C6.42943 1.74553 6.41821 1.75301 6.40937 1.76291C6.40052 1.77281 6.39434 1.78479 6.39141 1.79773C6.38848 1.81068 6.38889 1.82416 6.3926 1.8369C6.39632 1.84964 6.40322 1.86123 6.41265 1.87056L7.25508 2.713C7.27469 2.73228 7.29904 2.74604 7.32567 2.7529C7.3523 2.75977 7.38027 2.75949 7.40676 2.75209C8.04668 2.57898 8.70664 2.49105 9.36957 2.49056C10.9602 2.49056 12.5196 2.97648 14.0039 3.93697C15.3608 4.81263 16.5738 6.04324 17.5128 7.49434C17.5135 7.49523 17.5139 7.49633 17.5139 7.49747C17.5139 7.4986 17.5135 7.4997 17.5128 7.50059C16.8312 8.57364 15.9854 9.53304 15.0062 10.3438C14.9979 10.3507 14.991 10.3592 14.9861 10.3689C14.9812 10.3787 14.9784 10.3893 14.9779 10.4001C14.9773 10.411 14.979 10.4218 14.9829 10.432C14.9868 10.4421 14.9927 10.4514 15.0004 10.4591L15.7783 11.2366C15.7921 11.2505 15.8105 11.2587 15.8301 11.2597C15.8496 11.2606 15.8688 11.2542 15.8839 11.2417C16.9292 10.3615 17.834 9.32698 18.5671 8.17376C18.6967 7.97054 18.7652 7.73439 18.7645 7.49337C18.7638 7.25236 18.694 7.01661 18.5632 6.81414Z" fill="#838383" />
                        <path d="M9.38286 3.74146C9.10176 3.7413 8.82153 3.77278 8.54747 3.83528C8.53363 3.83815 8.52082 3.84472 8.51042 3.8543C8.50002 3.86387 8.4924 3.87609 8.48839 3.88965C8.48438 3.9032 8.48412 3.9176 8.48764 3.93129C8.49116 3.94498 8.49833 3.95746 8.50838 3.96741L12.9097 8.3676C12.9197 8.37765 12.9322 8.38482 12.9459 8.38834C12.9596 8.39186 12.9739 8.3916 12.9875 8.38759C13.0011 8.38357 13.0133 8.37596 13.0229 8.36556C13.0324 8.35516 13.039 8.34235 13.0419 8.32851C13.1672 7.77889 13.1671 7.2081 13.0415 6.65854C12.916 6.10897 12.6683 5.59475 12.3167 5.15406C11.9652 4.71337 11.5189 4.35754 11.011 4.11298C10.5031 3.86843 9.94659 3.74144 9.38286 3.74146ZM5.85598 6.62097C5.84604 6.61092 5.83356 6.60375 5.81987 6.60024C5.80617 6.59672 5.79178 6.59698 5.77822 6.60099C5.76467 6.605 5.75245 6.61261 5.74288 6.62301C5.7333 6.63342 5.72673 6.64622 5.72385 6.66006C5.58208 7.27942 5.59989 7.92462 5.77559 8.53522C5.95129 9.14581 6.27915 9.7018 6.72842 10.1511C7.1777 10.6003 7.73368 10.9282 8.34428 11.1039C8.95487 11.2796 9.60008 11.2974 10.2194 11.1556C10.2333 11.1528 10.2461 11.1462 10.2565 11.1366C10.2669 11.127 10.2745 11.1148 10.2785 11.1013C10.2825 11.0877 10.2828 11.0733 10.2793 11.0596C10.2757 11.0459 10.2686 11.0335 10.2585 11.0235L5.85598 6.62097Z" fill="#838383" />
                      </svg>
                      }
                    </button>
                  </div>
                </div>

                <div className="mt-10 flex justify-center ">
                  <button type="submit" id="_enviar" className=" 
                        rounded-md ring-1 lg:h-[45px] ring-[#277FE3] text-md font-semibold text-[#277FE3] hover:text-[#fff] dark:text-[#277FE3] dark:hover:text-[#fff] hover:bg-[#277FE3]
                        transition hover:translate-y-1 duration-300 h-8 w-[70%]" >Entrar</button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </main>
    </div>
  )
}
