import React, { useEffect, useState } from "react";
import api from "../api";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function BusinessDataSales(){
  const [rows, setRows] = useState([]);
  const [chart, setChart] = useState([]);

  useEffect(()=>{
    const load = async ()=>{
      try {
        const res = await api.get("/business/sales/"); // adjust endpoint
        const rowsData = Array.isArray(res.data.rows) ? res.data.rows : (res.data || []);
        setRows(rowsData);
        setChart(res.data.chart || [{month:'Jan',value:120},{month:'Feb',value:180}]);
      } catch(err){
        console.error(err);
        setRows([{id:1, date:'2025-11-01', product:'Demo Candle', qty:3, total:3600}]);
        setChart([{month:'Jan',value:120},{month:'Feb',value:180}]);
      }
    };
    load();
  },[]);

  return (
    <div className="container">
      <h2 className="h2">Sales Data</h2>

      <div style={{marginTop:12}} className="card">
        <div style={{height:240}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#5B21B6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{marginTop:12}}>
          <table style={{width:'100%', borderCollapse:'collapse'}}>
            <thead>
              <tr style={{textAlign:'left', borderBottom:'1px solid #eee'}}>
                <th>Date</th><th>Product</th><th>Qty</th><th>Total</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.id}>
                  <td style={{padding:'8px 6px'}}>{r.date}</td>
                  <td style={{padding:'8px 6px'}}>{r.product}</td>
                  <td style={{padding:'8px 6px'}}>{r.qty}</td>
                  <td style={{padding:'8px 6px'}}>KES {r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
