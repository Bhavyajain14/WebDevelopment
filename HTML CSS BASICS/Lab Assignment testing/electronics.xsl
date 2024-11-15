<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Electronic Items</title>
        <style>
          .container {
            width: 80%;
            margin: 0 auto;
          }
          .item {
            border: 1px solid #ccc;
            margin-bottom: 20px;
            padding: 10px;
            background-color: #f9f9f9;
          }
          .item h2 {
            color: #333;
            font-size: 24px;
          }
          .item .brand {
            color: #666;
          }
          .item .price {
            color: #FF5733; /* Adjust the color as needed */
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Electronic Items</h1>
          <xsl:apply-templates/>
        </div>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="electronics">
    <xsl:apply-templates/>
  </xsl:template>
  
  <xsl:template match="item">
    <div class="item">
      <h2><xsl:value-of select="name"/></h2>
      <p class="brand">Brand: <xsl:value-of select="brand"/></p>
      <p class="price"><xsl:text>$</xsl:text><xsl:value-of select="price"/></p>
    </div>
  </xsl:template>
</xsl:stylesheet>
