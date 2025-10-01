import { useState, useEffect } from 'react'

const CornPurchaseComponent = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [purchaseData, setPurchaseData] = useState(null)
  const [purchaseError, setPurchaseError] = useState(null)
  const [cornCount, setCornCount] = useState(0)

  const CORN_PURCHASE_API_URL = 'http://localhost:3000/api/corn/buy'
  const STORAGE_KEY = 'cornPurchaseCount'

  // Initialize counter from sessionStorage
  useEffect(() => {
    const savedCount = sessionStorage.getItem(STORAGE_KEY)
    setCornCount(savedCount ? parseInt(savedCount, 10) : 0)
  }, [])

  // Update sessionStorage whenever cornCount changes
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, cornCount.toString())
  }, [cornCount])

  const handlePurchaseCorn = async () => {
    setIsProcessing(true)
    setPurchaseError(null)
    setPurchaseData(null)

    try {
      const response = await fetch(CORN_PURCHASE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(`Something went wrong: ${errorData.message}`)
      }

      const purchaseResult = await response.json()
      setPurchaseData(purchaseResult.message)
      
      // Increment corn count on successful purchase
      setCornCount(prevCount => prevCount + 1)
    } catch (err) {
      setPurchaseError(err.message || 'Failed to process corn purchase')
    } finally {
      setIsProcessing(false)
    }
  }

  const renderPurchaseContent = () => {
    if (isProcessing) {
      return (
        <div className="corn-purchase-loading">
          <p>Processing corn purchase...</p>
        </div>
      )
    }

    if (purchaseError) {
      return (
        <div className="corn-purchase-error">
          <h4>Oops!</h4>
          <p>{purchaseError}</p>
          <button 
            className="corn-purchase-retry-button" 
            onClick={handlePurchaseCorn}
          >
            Try Again
          </button>
        </div>
      )
    }

    if (purchaseData) {
      return (
        <div className="corn-purchase-success">
          <h4>Purchase Completed Successfully</h4>
          <p>{purchaseData}</p>
          <button 
            className="corn-purchase-new-button" 
            onClick={handlePurchaseCorn}
          >
            Buy More Corn
          </button>
        </div>
      )
    }

    return (
      <div className="corn-purchase-initial">
        <p>Purchase fresh corn directly from our farm</p>
        <button 
          className="corn-purchase-button" 
          onClick={handlePurchaseCorn}
        >
          Buy Corn Now
        </button>
      </div>
    )
  }

  return (
    <div className="corn-purchase-section">
      <div className="corn-purchase-card">
        <h3 className="corn-purchase-title">
          Corn Purchase
        </h3>
        
        {/* Corn Counter Display */}
        <div className="corn-counter">
          <p className="corn-counter-text">
            🌽 Corn purchased this session: <strong>{cornCount}</strong>
          </p>
        </div>
        
        {renderPurchaseContent()}
      </div>
    </div>
  )
}

export default CornPurchaseComponent