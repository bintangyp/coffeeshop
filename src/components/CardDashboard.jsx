const Card = ({ label1, label2, span1, span2 }) => {
  return (
    <div className="card bg-mygreen text-primary-content flex-auto rounded-xl ">
      <div className="card-body">
        <p className=" uppercase font-semibold text-sm">{label1}</p>
        <span className="text-xl font-bold text-myaccent">{span1}</span>
        <p className=" uppercase font-semibold text-sm">{label2}</p>
        <span className="text-xl font-bold text-myaccent">{span2}</span>
      </div>
    </div>
  );
};
const CardDashboard = () => {
  return (
    // <div className="flex flex-wrap gap-4 m-4 justify-center ">
    <div className="grid grid-cols-2 lg:grid-cols-4 m-4 xl:mx-20 gap-4 ">
      <Card
        label1="total pendapatan bulan ini"
        label2={"total pendapatan hari ini"}
        span1="Rp. 10.345.000"
        span2="Rp. 345.000"
      />
      <Card
        label1="total keuntungan bulan ini"
        label2={"total keuntungan hari ini"}
        span1="Rp. 6.500.000"
        span2="Rp. 205.000"
      />
      <Card
        label1="total pengeluaran bulan ini"
        label2={"total pengeluaran hari ini"}
        span1="Rp. 645.000"
        span2="Rp. 35.000"
      />
      <Card
        label1="total stok"
        label2={"jumlah stok"}
        span1="Rp. 35.645.000"
        span2="344"
      />
    </div>
  );
};

export default CardDashboard;
