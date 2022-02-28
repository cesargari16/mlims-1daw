<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="cycle/name">
    <html>
        <body>
            <xsl:apply-templates />
        </body>
    </html>
</xsl:template>

<xsl:template match="secondary-school/name">
</xsl:template>

<xsl:template match="web">
</xsl:template>

<xsl:template match="cycle/name">
    <p><xsl:value-of select="."/></p>
</xsl:template>

<xsl:template match="cycle/grade"

</xsl:stylesheet>