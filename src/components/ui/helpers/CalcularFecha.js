export const CalcularFecha = (fechaCaducidad) => {
    const p30 = new Date();
    const p60 = new Date()
    const p90 = new Date()
    p30.setDate(p30.getDate() + 30)
    p60.setDate(p60.getDate() + 60)
    p90.setDate(p90.getDate() + 90)
    if (fechaCaducidad <= p30.getTime()) {
        return {
            color: `red`,
            texto: '(30) Vencido'
        }
    }
    if (fechaCaducidad > p30.getTime() && fechaCaducidad <= p60.getTime()) {
        return {
            color: `yellow`,
            texto: '(60) Por Vencer'
        }
    }
    if (fechaCaducidad > p60.getTime()) {
        return {
            color: `green`,
            texto: '(90) Vigente'
        }
    }
}
