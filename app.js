/* =============================================
   ORANGE BANK — app.js
   ============================================= */

// ---- DATA ----
const USER = { name: 'Carlos', balance: 12480.35, cpf: '123.456.789-00' };

const TRANSACTIONS = [
  { id:1, date:'2025-06-12', name:'Pix recebido — Ana Lima',   type:'pix',    dir:'in',  amt:150.00, icon:'⚡' },
  { id:2, date:'2025-06-12', name:'Supermercado Extra',         type:'cartao', dir:'out', amt:287.50, icon:'🛒' },
  { id:3, date:'2025-06-11', name:'TED — João Silva',           type:'ted',    dir:'out', amt:500.00, icon:'🔄' },
  { id:4, date:'2025-06-11', name:'Salário — Empresa ABC',      type:'credito',dir:'in',  amt:8500.00,icon:'💼' },
  { id:5, date:'2025-06-10', name:'Boleto COPEL',               type:'boleto', dir:'out', amt:187.45, icon:'💡' },
  { id:6, date:'2025-06-10', name:'Farmácia São João',          type:'cartao', dir:'out', amt:45.90,  icon:'💊' },
  { id:7, date:'2025-06-09', name:'Pix recebido — Pedro Costa', type:'pix',    dir:'in',  amt:200.00, icon:'⚡' },
  { id:8, date:'2025-06-09', name:'Spotify',                    type:'cartao', dir:'out', amt:21.90,  icon:'🎵' },
  { id:9, date:'2025-06-08', name:'Pix enviado — Maria Lima',   type:'pix',    dir:'out', amt:80.00,  icon:'⚡' },
  { id:10,date:'2025-06-08', name:'Rendimento CDB',             type:'credito',dir:'in',  amt:137.29, icon:'📈' },
  { id:11,date:'2025-06-07', name:'Posto Shell',                type:'cartao', dir:'out', amt:120.00, icon:'⛽' },
  { id:12,date:'2025-06-07', name:'Amazon',                     type:'cartao', dir:'out', amt:319.90, icon:'📦' },
  { id:13,date:'2025-06-06', name:'Transferência — Lucas M.',   type:'ted',    dir:'out', amt:230.00, icon:'🔄' },
  { id:14,date:'2025-06-05', name:'Pix recebido — Fernanda A.', type:'pix',    dir:'in',  amt:50.00,  icon:'⚡' },
  { id:15,date:'2025-06-05', name:'Netflix',                    type:'cartao', dir:'out', amt:55.90,  icon:'🎬' },
  { id:16,date:'2025-06-04', name:'Restaurante Madero',         type:'cartao', dir:'out', amt:98.00,  icon:'🍔' },
  { id:17,date:'2025-06-03', name:'TED recebido — Patrícia',   type:'ted',    dir:'in',  amt:400.00, icon:'🔄' },
  { id:18,date:'2025-06-03', name:'Farmácia Nissei',            type:'cartao', dir:'out', amt:67.40,  icon:'💊' },
  { id:19,date:'2025-06-02', name:'Recarga Vivo',               type:'cartao', dir:'out', amt:50.00,  icon:'📱' },
  { id:20,date:'2025-06-01', name:'Boleto Água SANEPAR',        type:'boleto', dir:'out', amt:54.80,  icon:'💧' },
];

const FAVORITES = [
  { name:'Ana Lima',   bank:'Nubank',  initials:'AL' },
  { name:'João Silva', bank:'Itaú',    initials:'JS' },
  { name:'Pedro Costa',bank:'BB',      initials:'PC' },
];

const PIX_KEYS = [
  { type:'E-mail', value:'carlos.silva@orangebank.com.br' },
  { type:'CPF',    value:'123.456.789-00' },
  { type:'Telefone',value:'(41) 99999-8888' },
];

const INVEST_PRODUCTS = [
  { name:'CDB 110% CDI', rate:'110% CDI', info:'Liquidez diária · Partir de R$ 100', risk:'low', riskLbl:'Baixo risco' },
  { name:'CDB 115% CDI', rate:'115% CDI', info:'Prazo: 12 meses · Partir de R$ 500', risk:'low', riskLbl:'Baixo risco' },
  { name:'Tesouro Selic 2027', rate:'101% CDI', info:'Garantido pelo governo federal', risk:'low', riskLbl:'Baixo risco' },
  { name:'LCI 96% CDI', rate:'96% CDI', info:'Isento de IR · Prazo 6 meses', risk:'low', riskLbl:'Baixo risco' },
  { name:'Fundo DI Prime', rate:'104% CDI', info:'Liquidez D+1 · Partir de R$ 1.000', risk:'med', riskLbl:'Médio risco' },
  { name:'Fundo Ações BR', rate:'18% aa*', info:'Renda variável · Longo prazo', risk:'hi', riskLbl:'Alto risco' },
];

const MY_INVESTMENTS = [
  { name:'CDB 110% CDI', date:'Desde Fev 2025', value:'R$ 12.947,00', yield:'+R$ 213,18' },
  { name:'Tesouro Selic 2027', date:'Desde Nov 2024', value:'R$ 5.885,00', yield:'+R$ 91,24' },
  { name:'LCI 96% CDI', date:'Desde Mar 2025', value:'R$ 1.883,00', yield:'+R$ 14,00' },
];

const FATURA_TX = [
  { name:'Amazon', date:'01/06', amt:'R$ 319,90' },
  { name:'Netflix', date:'03/06', amt:'R$ 55,90' },
  { name:'Restaurante Madero', date:'04/06', amt:'R$ 98,00' },
  { name:'Farmácia Nissei', date:'06/06', amt:'R$ 67,40' },
  { name:'Spotify', date:'08/06', amt:'R$ 21,90' },
  { name:'Farmácia São João', date:'10/06', amt:'R$ 45,90' },
  { name:'Supermercado Extra', date:'12/06', amt:'R$ 98,00' },
  { name:'Posto Shell', date:'13/06', amt:'R$ 65,50' },
];

const PAG_HIST = [
  { name:'COPEL Energia', date:'10/06', amt:'R$ 187,45', icon:'💡' },
  { name:'SANEPAR Água', date:'05/06', amt:'R$ 54,80', icon:'💧' },
  { name:'Boleto Condomínio', date:'01/06', amt:'R$ 980,00', icon:'🏢' },
  { name:'DARF IRPF', date:'31/05', amt:'R$ 325,00', icon:'🏛' },
];

// ---- UTILS ----
function fmt(n) {
  return 'R$ ' + n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function toast(msg, type='info') {
  let t = document.getElementById('globalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'globalToast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.className = 'toast', 3200);
}

function maskCPF(el) {
  let v = el.value.replace(/\D/g,'').slice(0,11);
  v = v.replace(/(\d{3})(\d)/,'$1.$2');
  v = v.replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3');
  v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4');
  el.value = v;
}

function maskMoney(el) {
  let v = el.value.replace(/\D/g,'');
  if (!v) { el.value=''; return; }
  v = (parseInt(v)/100).toFixed(2);
  el.value = 'R$ ' + v.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// ---- AUTH ----
function doLogin(e) {
  e.preventDefault();
  const cpf = document.getElementById('cpf').value;
  const pwd = document.getElementById('senha').value;
  if (!cpf || !pwd) { toast('Preencha CPF e senha','error'); return; }
  toast('Autenticando…','info');
  setTimeout(() => { window.location.href = 'dashboard.html'; }, 1000);
}

function togglePwd() {
  const el = document.getElementById('senha');
  el.type = el.type === 'password' ? 'text' : 'password';
}

function goRegister() {
  toast('Funcionalidade em breve!','info');
}

// ---- LAYOUT ----
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function logout() {
  if (confirm('Deseja sair da sua conta?')) window.location.href = 'index.html';
}

let notifOpen = false;
function showNotifications() {
  const panel = document.getElementById('notifPanel');
  if (!panel) return;
  notifOpen = !notifOpen;
  panel.classList.toggle('hidden', !notifOpen);
}

document.addEventListener('click', (e) => {
  const panel = document.getElementById('notifPanel');
  if (panel && notifOpen && !panel.contains(e.target) && !e.target.closest('.icon-btn')) {
    panel.classList.add('hidden');
    notifOpen = false;
  }
});

// ---- BALANCE TOGGLE ----
let balHidden = false;
function toggleBalance() {
  balHidden = !balHidden;
  const v = document.getElementById('saldoVal');
  const r = document.getElementById('rendVal');
  if (v) v.textContent = balHidden ? '••••••' : 'R$ 12.480,35';
  if (r) r.textContent = balHidden ? '••••' : '+ R$ 137,29';
}

// ---- DASHBOARD BAR CHART ----
const CHART_DATA = [
  { label:'01/06', in:800,  out:400 },
  { label:'04/06', in:0,    out:500 },
  { label:'07/06', in:8500, out:1200 },
  { label:'10/06', in:137,  out:233 },
  { label:'12/06', in:150,  out:287 },
  { label:'13/06', in:0,    out:120 },
];

function renderBarChart() {
  const el = document.getElementById('barChart');
  if (!el) return;
  const maxV = Math.max(...CHART_DATA.map(d => Math.max(d.in, d.out)));
  el.innerHTML = CHART_DATA.map(d => {
    const hIn  = Math.round((d.in  / maxV) * 110);
    const hOut = Math.round((d.out / maxV) * 110);
    return `<div class="bar-wrap">
      <div class="bar-pair">
        <div class="bar in"  style="height:${hIn}px"  title="Entrada: ${fmt(d.in)}"></div>
        <div class="bar out" style="height:${hOut}px" title="Saída: ${fmt(d.out)}"></div>
      </div>
      <span class="bar-label">${d.label}</span>
    </div>`;
  }).join('');
}

// ---- TRANSACTIONS LIST ----
function renderTxList(containerId, items, limit=5) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.slice(0, limit).map(tx => `
    <li class="tx-item">
      <div class="tx-icon ${tx.dir}">${tx.icon}</div>
      <div class="tx-body">
        <div class="tx-name">${tx.name}</div>
        <div class="tx-date">${formatDate(tx.date)} <span class="tx-type">${tx.type.toUpperCase()}</span></div>
      </div>
      <div class="tx-amt ${tx.dir}">${tx.dir==='in'?'+':'-'}${fmt(tx.amt)}</div>
    </li>`).join('');
}

function formatDate(d) {
  const [y,m,day] = d.split('-');
  return `${day}/${m}/${y}`;
}

// ---- EXTRATO ----
let currentPeriod = 7;
function filterPeriod(btn, days) {
  document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentPeriod = days;
  renderExtrato();
}

function renderExtrato() {
  const list = document.getElementById('extratoList');
  if (!list) return;
  const filterType = document.getElementById('filterType')?.value || '';
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - currentPeriod);

  let items = TRANSACTIONS.filter(tx => {
    const d = new Date(tx.date);
    return d >= cutoff && (!filterType || tx.type === filterType);
  });

  // summary
  const totalIn  = items.filter(t=>t.dir==='in').reduce((s,t)=>s+t.amt, 0);
  const totalOut = items.filter(t=>t.dir==='out').reduce((s,t)=>s+t.amt, 0);
  const tiEl = document.getElementById('totalIn');
  const toEl = document.getElementById('totalOut');
  const tbEl = document.getElementById('totalBal');
  if (tiEl) tiEl.textContent = fmt(totalIn);
  if (toEl) toEl.textContent = fmt(totalOut);
  if (tbEl) { const bal=totalIn-totalOut; tbEl.textContent=fmt(bal); tbEl.className=''; tbEl.classList.add(bal>=0?'green':'red'); }

  // group by date
  const groups = {};
  items.forEach(tx => {
    if (!groups[tx.date]) groups[tx.date] = [];
    groups[tx.date].push(tx);
  });

  const sortedDates = Object.keys(groups).sort((a,b)=>b.localeCompare(a));
  list.innerHTML = sortedDates.map(date => `
    <div class="extrato-day-group">
      <div class="extrato-day-label">${formatDate(date)}</div>
      ${groups[date].map(tx => `
        <div class="tx-item">
          <div class="tx-icon ${tx.dir}">${tx.icon}</div>
          <div class="tx-body">
            <div class="tx-name">${tx.name}</div>
            <div class="tx-date"><span class="tx-type">${tx.type.toUpperCase()}</span></div>
          </div>
          <div class="tx-amt ${tx.dir}">${tx.dir==='in'?'+':'-'}${fmt(tx.amt)}</div>
        </div>`).join('')}
    </div>`).join('');
}

function exportExtrato() { toast('Gerando PDF…','info'); setTimeout(() => toast('PDF exportado com sucesso!','success'), 1500); }

// ---- TRANSFERÊNCIA ----
function setTab(btn, type) {
  document.querySelectorAll('.ttab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function tfNext() {
  const name = document.getElementById('tfName')?.value;
  const bank = document.getElementById('tfBank')?.value;
  if (!name || !bank || bank === 'Selecione o banco') { toast('Preencha todos os campos','error'); return; }
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
  const dateEl = document.getElementById('tfDate');
  if (dateEl) dateEl.valueAsDate = new Date();
}

function tfBack() {
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
}

function tfReview() {
  const val = document.getElementById('tfVal')?.value;
  if (!val || val === 'R$ 0,00' || !val) { toast('Informe um valor','error'); return; }
  const box = document.getElementById('reviewBox');
  box.innerHTML = `
    <div class="review-row"><span>Favorecido</span><strong>${document.getElementById('tfName').value}</strong></div>
    <div class="review-row"><span>Banco</span><strong>${document.getElementById('tfBank').value}</strong></div>
    <div class="review-row"><span>Agência / Conta</span><strong>${document.getElementById('tfAg').value} / ${document.getElementById('tfConta').value}</strong></div>
    <div class="review-row"><span>Valor</span><strong>${val}</strong></div>
    <div class="review-row"><span>Data</span><strong>${document.getElementById('tfDate').value}</strong></div>
    ${document.getElementById('tfDesc').value ? `<div class="review-row"><span>Descrição</span><strong>${document.getElementById('tfDesc').value}</strong></div>` : ''}
  `;
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.remove('hidden');
}

function tfBackToStep2() {
  document.getElementById('step3').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
}

function tfConfirm() {
  const pins = Array.from(document.querySelectorAll('#step3 .pin-digit')).map(i => i.value);
  if (pins.some(p => !p)) { toast('Digite a senha de 4 dígitos','error'); return; }
  toast('Processando…','info');
  setTimeout(() => {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.remove('hidden');
    const val = document.getElementById('tfVal').value;
    const name = document.getElementById('tfName').value;
    document.getElementById('successMsg').textContent = `${val} enviado para ${name} com sucesso!`;
    toast('Transferência realizada!','success');
  }, 1500);
}

function tfNew() {
  document.getElementById('step4').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
  document.querySelectorAll('.transfer-step input').forEach(i => { if (!i.disabled) i.value=''; });
}

function printReceipt() { window.print(); }

function renderFavoritos() {
  const el = document.getElementById('favList');
  if (!el) return;
  el.innerHTML = FAVORITES.map(f => `
    <div class="fav-card" onclick="selectFavorite('${f.name}','${f.bank}')">
      <div class="fav-av">${f.initials}</div>
      <div><div style="font-weight:700">${f.name}</div><div style="color:var(--muted);font-size:.76rem">${f.bank}</div></div>
    </div>`).join('');
}

function selectFavorite(name, bank) {
  const el = document.getElementById('tfName');
  if (el) { el.value = name; toast(`${name} selecionado como favorito`,'info'); }
}

function pinFocus(el) {
  if (el.value.length === 1) {
    const next = el.nextElementSibling;
    if (next && next.classList.contains('pin-digit')) next.focus();
  }
}

// ---- PIX ----
function setPixTab(btn, tab) {
  document.querySelectorAll('.pix-tabs .ptab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('pixTabChave').classList.toggle('hidden', tab !== 'chave');
  document.getElementById('pixTabDados').classList.toggle('hidden', tab !== 'dados');
  document.getElementById('pixTabQr').classList.toggle('hidden', tab !== 'qr');
}

function sendPix() {
  const amt = document.getElementById('pixAmt')?.value;
  if (!amt || amt === 'R$ 0,00') { toast('Informe um valor','error'); return; }
  const modal = document.getElementById('pixModal');
  document.getElementById('pixReviewContent').innerHTML = `
    <div class="review-box">
      <div class="review-row"><span>Chave</span><strong>${document.getElementById('pixKeyInput')?.value || 'Não informada'}</strong></div>
      <div class="review-row"><span>Valor</span><strong>${amt}</strong></div>
    </div>`;
  modal.classList.remove('hidden');
}

function closePixModal() { document.getElementById('pixModal').classList.add('hidden'); }

function confirmPix() {
  toast('Pix enviado com sucesso!','success');
  document.getElementById('pixModal').classList.add('hidden');
  setTimeout(() => renderPixHist(), 100);
}

function genCharge() {
  const amt = document.getElementById('cobAmt')?.value;
  if (!amt || amt === 'R$ 0,00') { toast('Informe um valor','error'); return; }
  document.getElementById('qrResult').classList.remove('hidden');
  document.getElementById('pixCopyStr').textContent = '00020126360014br.gov.bcb.pix0114+5541999998888520400005303986540' + amt.replace(/\D/g,'').slice(0,-2) + '.005802BR5913Carlos Silva6008Curitiba62070503***63046CA3';
  toast('QR Code gerado!','success');
}

function copyPixStr() {
  const str = document.getElementById('pixCopyStr').textContent;
  navigator.clipboard?.writeText(str).then(() => toast('Código copiado!','success')).catch(() => toast('Código copiado!','success'));
}

function copyPix() { navigator.clipboard?.writeText(document.getElementById('pixKeyVal').textContent).then(() => toast('Chave copiada!','success')).catch(() => toast('Chave copiada!','success')); }

function addKey() { toast('Funcionalidade de cadastro de chave em breve!','info'); }

function renderMyKeys() {
  const el = document.getElementById('myKeys');
  if (!el) return;
  el.innerHTML = PIX_KEYS.map(k => `
    <div class="key-row">
      <div><span class="key-type">${k.type}</span><br>${k.value}</div>
      <button class="btn btn-sm btn-outline" onclick="navigator.clipboard?.writeText('${k.value}').then(()=>toast('Chave copiada!','success'))">Copiar</button>
    </div>`).join('');
}

function renderPixHist() {
  const el = document.getElementById('pixHistList');
  if (!el) return;
  const pixTx = TRANSACTIONS.filter(t => t.type==='pix');
  renderTxList('pixHistList', pixTx, 10);
}

// ---- CARTÕES ----
function switchCard(btn, type) {
  document.querySelectorAll('.card-sw-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const card = document.getElementById('bigCard');
  if (!card) return;
  card.className = 'big-card ' + type;
}

function toggleCard(el, type) {
  toast(`${type === 'fisico' ? 'Cartão físico' : type === 'online' ? 'Compras online' : type === 'inter' ? 'Compras internacionais' : 'NFC'} ${el.checked ? 'ativado' : 'desativado'}`, el.checked ? 'success' : 'info');
}

let cvvTimer;
function showCVV() {
  document.getElementById('cvvModal').classList.remove('hidden');
  const bar = document.getElementById('cvvBar');
  let w = 100;
  clearInterval(cvvTimer);
  cvvTimer = setInterval(() => {
    w -= (100/30);
    if (bar) bar.style.width = Math.max(0,w) + '%';
    if (w <= 0) { clearInterval(cvvTimer); document.getElementById('cvvValue').textContent='---'; }
  }, 1000);
}

function closeCVV() {
  clearInterval(cvvTimer);
  document.getElementById('cvvModal').classList.add('hidden');
}

function changeLimit() { toast('Solicitação de alteração de limite enviada','info'); }
function blockCard()   { if (confirm('Bloquear cartão?')) toast('Cartão bloqueado temporariamente','info'); }
function requestVirtual() { toast('Cartão virtual gerado com sucesso!','success'); }
function payFatura() { toast('Redirecionando para pagamento da fatura…','info'); }
function prevFatura() { document.getElementById('faturaMonth').textContent='Maio 2025'; }
function nextFatura() { document.getElementById('faturaMonth').textContent='Junho 2025'; }

function renderFaturaList() {
  const el = document.getElementById('faturaList');
  if (!el) return;
  el.innerHTML = FATURA_TX.map(tx => `
    <li class="tx-item">
      <div class="tx-icon out">💳</div>
      <div class="tx-body"><div class="tx-name">${tx.name}</div><div class="tx-date">${tx.date}/2025</div></div>
      <div class="tx-amt out">-${tx.amt}</div>
    </li>`).join('');
}

// ---- INVESTIMENTOS ----
function openInvestModal()  { document.getElementById('investModal').classList.remove('hidden'); }
function closeInvestModal() { document.getElementById('investModal').classList.add('hidden'); }

function confirmInvest() {
  const val = document.getElementById('investAmt')?.value;
  const prod = document.getElementById('investProd')?.value;
  if (!val || val === 'R$ 0,00') { toast('Informe o valor','error'); return; }
  toast(`Investimento em ${prod} realizado com sucesso!`,'success');
  closeInvestModal();
}

function renderInvestProducts() {
  const el = document.getElementById('investProducts');
  if (!el) return;
  el.innerHTML = INVEST_PRODUCTS.map(p => `
    <div class="invest-prod-card" onclick="openInvestModal()">
      <span class="prod-tag ${p.risk}">${p.riskLbl}</span>
      <div class="prod-name">${p.name}</div>
      <div class="prod-rate">${p.rate}</div>
      <div class="prod-info">${p.info}</div>
    </div>`).join('');
}

function renderMyInvests() {
  const el = document.getElementById('myInvestList');
  if (!el) return;
  el.innerHTML = MY_INVESTMENTS.map(i => `
    <div class="my-invest-item">
      <div class="tx-icon neutral">📈</div>
      <div class="mi-info">
        <div class="mi-name">${i.name}</div>
        <div class="mi-date">${i.date}</div>
      </div>
      <div class="mi-val">
        <strong>${i.value}</strong>
        <small>${i.yield} este mês</small>
      </div>
      <button class="btn btn-outline btn-sm" onclick="toast('Resgate solicitado!','success')">Resgatar</button>
    </div>`).join('');
}

// ---- PAGAMENTOS ----
function setPagType(btn, type) {
  document.querySelectorAll('.pag-type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  ['Boleto','Concessionaria','Impostos','Recarga'].forEach(t => {
    const el = document.getElementById('pag'+t);
    if (el) el.classList.toggle('hidden', t.toLowerCase() !== type);
  });
}

function readBoleto() {
  const code = document.getElementById('barcodeInput')?.value;
  if (!code) { toast('Digite o código de barras','error'); return; }
  toast('Consultando boleto…','info');
  setTimeout(() => {
    document.getElementById('boletoResult').classList.remove('hidden');
    toast('Boleto encontrado!','success');
    const d = new Date(); d.setDate(d.getDate()+2);
    document.getElementById('bDate').valueAsDate = d;
  }, 1200);
}

function readBarcode() { toast('Leitura via câmera em breve','info'); }

function payBoleto() {
  toast('Processando pagamento…','info');
  setTimeout(() => { toast('Boleto pago com sucesso!','success'); document.getElementById('boletoResult').classList.add('hidden'); document.getElementById('barcodeInput').value=''; }, 1500);
}

function selectConta(name) {
  toast(`Abrir ${name} — insira o código de barras na aba Boleto`,'info');
  setTimeout(() => setPagType(document.querySelector('.pag-type-btn'), 'boleto'), 500);
}

let selectedOp = 'Vivo';
function setOp(btn, op) {
  document.querySelectorAll('.op-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedOp = op;
}

let selectedRecarga = '';
function setRecarga(btn, val) {
  document.querySelectorAll('.val-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedRecarga = val;
}

function doRecarga() {
  const num = document.getElementById('recargaNum')?.value;
  if (!num) { toast('Digite o número','error'); return; }
  if (!selectedRecarga) { toast('Selecione um valor','error'); return; }
  toast(`Recarga de ${selectedRecarga} realizada para ${num} (${selectedOp})!`,'success');
}

function renderPagHist() {
  const el = document.getElementById('pagHistList');
  if (!el) return;
  el.innerHTML = PAG_HIST.map(p => `
    <li class="tx-item">
      <div class="tx-icon out">${p.icon}</div>
      <div class="tx-body"><div class="tx-name">${p.name}</div><div class="tx-date">${p.date}/2025</div></div>
      <div class="tx-amt out">-${p.amt}</div>
    </li>`).join('');
}

// ---- PERFIL ----
function setProfileTab(btn, tab) {
  document.querySelectorAll('.profile-tabs .ptab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  ['Dados','Endereco','Seguranca','Notif'].forEach(t => {
    const el = document.getElementById('tab'+t);
    if (el) el.classList.toggle('hidden', t.toLowerCase() !== tab);
  });
}

function saveProfile() { toast('Alterações salvas com sucesso!','success'); }
function editPhoto()   { toast('Upload de foto em breve','info'); }
function changePwd()   { toast('Verifique seu e-mail para alterar a senha','info'); }
function viewDevices() { toast('Você possui 2 dispositivos conectados','info'); }
function closeAccount(){ toast('Entre em contato com nossa ouvidoria','info'); }
function fetchCEP() {
  const cep = document.getElementById('cepInput')?.value.replace(/\D/g,'');
  if (cep.length < 8) { toast('CEP inválido','error'); return; }
  toast('CEP encontrado: Rua das Flores, Batel, Curitiba/PR','success');
}

// ---- DEPOSIT MODAL ----
function showDeposit() { document.getElementById('depositModal')?.classList.remove('hidden'); }
function closeDeposit() { document.getElementById('depositModal')?.classList.add('hidden'); }

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  // Dashboard
  renderBarChart();
  renderTxList('txList', TRANSACTIONS, 6);

  // Extrato
  renderExtrato();

  // Favoritos (transferencia)
  renderFavoritos();

  // Pix
  renderMyKeys();
  renderPixHist();

  // Cartões
  renderFaturaList();

  // Investimentos
  renderInvestProducts();
  renderMyInvests();

  // Pagamentos
  renderPagHist();

  // Definir data atual nos inputs date
  document.querySelectorAll('input[type=date]').forEach(el => {
    if (!el.value) el.valueAsDate = new Date();
  });
});
