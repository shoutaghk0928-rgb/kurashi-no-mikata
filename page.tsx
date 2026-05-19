
export default function Home() {
  const cards = ["確定申告いる？","扶養に入れる？","年末調整チェック"];
  return (
    <main style={{fontFamily:'sans-serif',padding:20,maxWidth:480,margin:'0 auto'}}>
      <h1 style={{color:'#1769e0'}}>暮らしのミカタ</h1>
      <p>必要な手続きが、30秒でわかる</p>

      <input
        placeholder="知りたいことを検索"
        style={{width:'100%',padding:14,borderRadius:12,border:'1px solid #ddd'}}
      />

      <h2>人気の診断</h2>
      <div style={{display:'grid',gap:12}}>
        {cards.map(c=>(
          <button key={c} style={{
            padding:18,borderRadius:16,border:'1px solid #ddd',
            background:'white',fontSize:16,textAlign:'left'
          }}>{c}</button>
        ))}
      </div>
    </main>
  )
}
