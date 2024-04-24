const Footer = () => {
    return (
        <div className="bg-blue-100 p-10">
      <div className="sm:flex gap-5 justify-between mb-10">
          <div className="mb-4">
            <h3 className="text-blue-900 font-bold pb-1 text-left">Useful Links</h3>
            <p className="text-gray-500 text-sm text-left">Foreign Exchange</p>
            <p className="text-gray-500 text-sm text-left">Investor Relation</p>
            <p className="text-gray-500 text-sm text-left">Research isbank</p>
          </div>
          <div className="mb-4">
            <h3 className="text-blue-900 text-left pb-1 font-bold">Banking Products</h3>
            <p className="text-gray-500 text-sm text-left">Western Union</p>
            <p className="text-gray-500 text-sm text-left">FX Transfer</p>
            <p className="text-gray-500 text-sm text-left">SWIFT</p>
            <p className="text-gray-500 text-sm text-left">MoneyGram</p>
            <p className="text-gray-500 text-sm text-left">Ria Money</p>
          </div>
          <div className="mb-4">
            <h3 className="text-blue-900 text-left pb-1  font-bold">Contact Us</h3>
            <p className="text-gray-500 text-sm text-left">Sitmap</p>
          </div>
      </div>
            <p className="text-left text-gray-500 text-sm">Türkiye İş Bankası A.Ş.  security  privacy policy</p>
      </div>
    );
  };
  
  export default Footer;