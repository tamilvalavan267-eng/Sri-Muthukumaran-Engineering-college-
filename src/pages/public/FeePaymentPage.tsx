import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FeeTransaction } from '../../types';
import confetti from 'canvas-confetti';
import {
  CreditCard,
  QrCode,
  Building,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Search,
  Receipt,
  Download,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const FeePaymentPage: React.FC = () => {
  const { students, fees, processFeePayment } = useApp();

  const [lookupId, setLookupId] = useState('STUDENT001');
  const [selectedStudent, setSelectedStudent] = useState(() => students[0] || null);

  // Form selections
  const [feeType, setFeeType] = useState('Tuition Fee (Term 2)');
  const [paymentAmount, setPaymentAmount] = useState<number>(fees.pendingAmount > 0 ? fees.pendingAmount : 15000);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'Net Banking'>('UPI');

  // Gateway Simulation State
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedTxn, setCompletedTxn] = useState<FeeTransaction | null>(null);

  // Card details
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8912');
  const [cardExpiry, setCardExpiry] = useState('08/28');
  const [cardCvv, setCardCvv] = useState('321');

  // Handle Lookup
  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const found = students.find((s) => s.id.toUpperCase() === lookupId.trim().toUpperCase());
    if (found) {
      setSelectedStudent(found);
    } else {
      alert(`Student with ID "${lookupId}" not found. Try STUDENT001, STUDENT002, STUDENT003`);
    }
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentAmount <= 0) {
      alert('Payment amount must be greater than zero.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const txn = processFeePayment({
        studentId: selectedStudent.id,
        feeType,
        amount: Number(paymentAmount),
        paymentMethod,
      });

      setIsProcessing(false);
      setCompletedTxn(txn);

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }, 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ backgroundColor: '#071f3d', color: '#ffffff', padding: '4rem 0 3.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span
              style={{
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.75rem',
              }}
            >
              Secure Online Fee Portal
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.15 }}>
              Student Fee Settlement & E-Receipts
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.6 }}>
              Instant verification, automated receipt generation, and real-time synchronization with the Student Information Management System (SIMS).
            </p>
          </div>
        </div>
      </section>

      {/* Main Payment Section */}
      <section className="container">
        
        {/* Student Lookup Search Bar */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '1.25rem 1.75rem',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#ebf3fe', color: '#0a3a7b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Receipt size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0a3a7b' }}>
                Lookup Student for Fee Payment
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                Demo IDs: <strong>STUDENT001</strong> (Vignesh R.), <strong>STUDENT002</strong> (Priya S.)
              </div>
            </div>
          </div>

          <form onSubmit={handleLookup} style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={lookupId}
              onChange={(e) => setLookupId(e.target.value)}
              placeholder="Enter Student ID"
              className="form-input"
              style={{ width: '180px', padding: '0.5rem 0.85rem' }}
            />
            <button type="submit" className="btn btn-primary btn-sm">
              <Search size={15} />
              <span>Fetch Details</span>
            </button>
          </form>
        </div>

        {/* 2-Column Fee Dashboard */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1.4fr',
            gap: '2.5rem',
          }}
          className="md-grid-cols-1"
        >
          {/* Left Column: Student Fee Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Student Info Card */}
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                <img
                  src={selectedStudent.photo}
                  alt={selectedStudent.name}
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0a3a7b' }}
                />
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                    {selectedStudent.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    ID: <strong>{selectedStudent.id}</strong> • Reg: {selectedStudent.registerNumber}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: '#0284c7', fontWeight: 600 }}>
                    {selectedStudent.department} ({selectedStudent.year}rd Year / Sem {selectedStudent.semester})
                  </div>
                </div>
              </div>

              {/* Fee Breakdown Table */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>Tuition Fee (Annual)</span>
                  <strong>₹ {fees.tuitionFee.toLocaleString()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>College Bus Transport Fee</span>
                  <strong>₹ {fees.transportFee.toLocaleString()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>Anna University Exam Fee</span>
                  <strong>₹ {fees.examFee.toLocaleString()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>Special Lab & Library Infrastructure</span>
                  <strong>₹ {fees.specialLabFee.toLocaleString()}</strong>
                </div>

                <div style={{ borderTop: '2px dashed var(--border-light)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b' }}>
                    <span>Total Fee Assessed</span>
                    <span>₹ {fees.totalFee.toLocaleString()}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: '#059669', fontWeight: 700 }}>
                  <span>Paid Amount So Far</span>
                  <span>₹ {fees.paidAmount.toLocaleString()}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', color: fees.pendingAmount > 0 ? '#dc2626' : '#059669', fontWeight: 800, backgroundColor: fees.pendingAmount > 0 ? '#fee2e2' : '#d1fae5', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
                  <span>Pending Balance Due</span>
                  <span>₹ {fees.pendingAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment History Preview */}
            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a3a7b', margin: 0 }}>
                  Recent Transactions & Receipts
                </h4>
                <span className="badge badge-green">Verified</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {fees.history.map((txn, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      padding: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: '#f8fafc',
                      fontSize: '0.85rem',
                    }}
                  >
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a' }}>{txn.feeType}</strong>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>
                        {txn.date} • {txn.paymentMethod} • Ref: {txn.receiptNo}
                      </span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <strong style={{ color: '#059669' }}>₹ {txn.amount.toLocaleString()}</strong>
                      <span className="badge badge-green" style={{ display: 'block', fontSize: '0.68rem', marginTop: '2px' }}>
                        Paid
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Payment Gateway / Simulation */}
          <div>
            {!completedTxn ? (
              <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                      Online Payment Checkout
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: '#64748b', margin: '4px 0 0 0' }}>
                      Simulated 256-bit SSL encrypted institutional gateway
                    </p>
                  </div>
                  <div className="badge badge-blue">
                    <ShieldCheck size={14} />
                    <span>Safe & Secure</span>
                  </div>
                </div>

                <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  {/* Select Fee Type */}
                  <div className="form-group">
                    <label className="form-label">Select Fee Category</label>
                    <select
                      value={feeType}
                      onChange={(e) => setFeeType(e.target.value)}
                      className="form-select"
                    >
                      <option value="Tuition Fee (Term 2)">Tuition Fee (Term 2)</option>
                      <option value="Hostel & Mess Charges">Hostel & Mess Charges</option>
                      <option value="Transport Bus Annual Fee">Transport Bus Annual Fee</option>
                      <option value="Anna University Examination Fee">Anna University Examination Fee</option>
                      <option value="Special Lab & Training Fee">Special Lab & Training Fee</option>
                      <option value="Alumni & Convocation Fee">Alumni & Convocation Fee</option>
                    </select>
                  </div>

                  {/* Amount to Pay */}
                  <div className="form-group">
                    <label className="form-label">Payment Amount (INR ₹)</label>
                    <input
                      type="number"
                      required
                      min="500"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(Number(e.target.value))}
                      className="form-input"
                      style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a3a7b' }}
                    />
                  </div>

                  {/* Payment Method Selector */}
                  <div>
                    <label className="form-label" style={{ marginBottom: '0.5rem', display: 'block' }}>
                      Choose Payment Method
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('UPI')}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          padding: '0.85rem 0.5rem',
                          borderRadius: '12px',
                          border: paymentMethod === 'UPI' ? '2px solid #0a3a7b' : '1.5px solid var(--border-light)',
                          backgroundColor: paymentMethod === 'UPI' ? '#ebf3fe' : '#ffffff',
                          color: paymentMethod === 'UPI' ? '#0a3a7b' : '#64748b',
                          transition: 'all 0.2s',
                        }}
                      >
                        <QrCode size={22} style={{ marginBottom: '4px' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>UPI / QR</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('Card')}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          padding: '0.85rem 0.5rem',
                          borderRadius: '12px',
                          border: paymentMethod === 'Card' ? '2px solid #0a3a7b' : '1.5px solid var(--border-light)',
                          backgroundColor: paymentMethod === 'Card' ? '#ebf3fe' : '#ffffff',
                          color: paymentMethod === 'Card' ? '#0a3a7b' : '#64748b',
                          transition: 'all 0.2s',
                        }}
                      >
                        <CreditCard size={22} style={{ marginBottom: '4px' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Credit/Debit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('Net Banking')}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          padding: '0.85rem 0.5rem',
                          borderRadius: '12px',
                          border: paymentMethod === 'Net Banking' ? '2px solid #0a3a7b' : '1.5px solid var(--border-light)',
                          backgroundColor: paymentMethod === 'Net Banking' ? '#ebf3fe' : '#ffffff',
                          color: paymentMethod === 'Net Banking' ? '#0a3a7b' : '#64748b',
                          transition: 'all 0.2s',
                        }}
                      >
                        <Building size={22} style={{ marginBottom: '4px' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Net Banking</span>
                      </button>
                    </div>
                  </div>

                  {/* UPI QR Display if UPI selected */}
                  {paymentMethod === 'UPI' && (
                    <div
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1.5px dashed #bfdbfe',
                        borderRadius: '14px',
                        padding: '1.25rem',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                        Scan via GPay, PhonePe, Paytm, or BHIM
                      </div>
                      <div
                        style={{
                          width: '140px',
                          height: '140px',
                          backgroundColor: '#ffffff',
                          margin: '0 auto 0.75rem auto',
                          borderRadius: '12px',
                          border: '1px solid #cbd5e1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 'var(--shadow-sm)',
                        }}
                      >
                        <QrCode size={110} color="#0a3a7b" />
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                        UPI VPA: <strong>smec.college@sbi</strong>
                      </div>
                    </div>
                  )}

                  {/* Card fields if Card selected */}
                  {paymentMethod === 'Card' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label">Card Number</label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label">Expiry (MM/YY)</label>
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label">CVV</label>
                          <input
                            type="password"
                            maxLength={3}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Net Banking dropdown */}
                  {paymentMethod === 'Net Banking' && (
                    <div className="form-group">
                      <label className="form-label">Select Bank</label>
                      <select className="form-select">
                        <option>State Bank of India (SBI)</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>Indian Overseas Bank (IOB)</option>
                        <option>Canara Bank</option>
                      </select>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="btn btn-primary btn-lg"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontWeight: 800,
                      marginTop: '0.5rem',
                    }}
                  >
                    {isProcessing ? (
                      <span>Connecting to Payment Gateway...</span>
                    ) : (
                      <>
                        <span>Pay ₹{paymentAmount.toLocaleString()} Now</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Payment Success Receipt View */
              <div
                className="card-white"
                style={{
                  padding: '2.5rem',
                  borderRadius: '24px',
                  border: '2px solid #a7f3d0',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#d1fae5',
                    color: '#065f46',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.35rem' }}>
                  Payment Successful!
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Amount of <strong>₹{completedTxn.amount.toLocaleString()}</strong> has been credited to SMEC Accounts.
                </p>

                {/* Printable Official Receipt Slip */}
                <div
                  id="printable-receipt"
                  style={{
                    border: '2px dashed #93c5fd',
                    borderRadius: '16px',
                    backgroundColor: '#f8fafc',
                    padding: '1.75rem',
                    textAlign: 'left',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                    <div>
                      <strong style={{ color: '#0a3a7b', fontSize: '1.05rem', display: 'block' }}>Sri Muthukumaran Engineering College</strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Chikkarayapuram, Mangadu, Chennai - 600069</span>
                    </div>
                    <div style={{ backgroundColor: '#10b981', color: '#ffffff', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                      PAID
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem', fontSize: '0.875rem' }}>
                    <div>
                      <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Transaction ID</span>
                      <strong style={{ color: '#0a3a7b' }}>{completedTxn.transactionId}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Receipt Number</span>
                      <strong>{completedTxn.receiptNo}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Student Name & ID</span>
                      <strong>{selectedStudent.name} ({selectedStudent.id})</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Fee Category</span>
                      <strong>{completedTxn.feeType}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Payment Method</span>
                      <strong>{completedTxn.paymentMethod}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Date & Status</span>
                      <strong style={{ color: '#059669' }}>{completedTxn.date} • {completedTxn.status}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <button
                    onClick={() => window.print()}
                    className="btn btn-secondary"
                  >
                    <Printer size={16} />
                    <span>Print Receipt</span>
                  </button>
                  <button
                    onClick={() => setCompletedTxn(null)}
                    className="btn btn-primary"
                  >
                    Make Another Payment
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </section>

    </div>
  );
};
