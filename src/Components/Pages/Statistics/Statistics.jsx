import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";
import {
  ComposedChart,
  Bar,
  Area,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const products = useLoaderData();

  const chartData = products.map((product) => ({
    name: product.product_title, // Product name for X-axis
    price: product.price, // Price for Bar and Area
    rating: product.rating, // Rating for Scatter
  }));

  return (
    <>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div className="sm:w-10/12 w-11/12 mx-auto pt-10 pb-20">
        <h1 className="text-[#0b0b0be0] font-[700] text-xl text-center py-5">
          Statistics
        </h1>
        <div className="py-10 px-3 bg-white rounded-xl shadow-sm">
          <ResponsiveContainer width="100%" height={600}>
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 20, bottom: 110, left: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                angle={-50}
                textAnchor="end"
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" barSize={20} fill="#9538E2" name="Price" />
              <Area
                type="monotone"
                dataKey="price"
                fill="#84d888d2"
                stroke="#84d896"
                name="Price(Area)"
              />
              <Scatter dataKey="rating" fill="#ff7300" name="Rating" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Statistics;
