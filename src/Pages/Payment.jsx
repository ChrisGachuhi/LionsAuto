import kcb from '../assets/images/Banks/kcb.png'
import mpesa from '../assets/images/Banks/mpesa.png'
import ncba from '../assets/images/Banks/ncba.jpeg'

const Payment = () => {
  return (
    <div className="Page Payment">
      <div className="cards-container">
        <div className="card">
          <img src={kcb} alt="" />
          <div className="details">
            <p>Account Name: Lions Auto Services EA Limited</p>
            <p>Account No. 1208084127</p>
            <p>Swift code: KCBLENX</p>
            <p>Clearing code: 01260</p>
            <p>Branch: Kariobangi</p>
          </div>
        </div>

        <div className="card">
          <img src={ncba} alt="" />
          <div className="details">
            <p>Account Name: Lions Auto Services EA Limited</p>
            <p>Account No. 6853100018</p>
            <p>Swift code: CBAFKENX</p>
            <p>Clearing code: 07000</p>
            <p>Branch: Head Office(500)</p>
          </div>
        </div>

        <div className="card">
          <img src={mpesa} alt="" />
          <div className="details">
            <p>Kenya Commercial Bank Ltd</p>
            <p>Paybill No. 522533</p>
            <p>Account No. 7574304 </p>
            <p>-OR-</p>
            <p>NCBA Bank PLC</p>
            <p>Paybill No. 880100</p>
            <p>Account No. 6853100018 </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
