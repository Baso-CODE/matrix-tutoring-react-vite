from fpdf import FPDF

# Jadwal asli sesuai permintaan (tidak diubah)
schedule_data = [
    ("Minggu 1 (1-5 Okt)", [
        ("1 Okt", "Rabu", "Pagi", "Easy run", "6 km"),
        ("2 Okt", "Kamis", "Pagi", "Tempo ringan", "7 km"),
        ("3 Okt", "Jumat", "Pagi", "Recovery run", "4 km"),
        ("4 Okt", "Sabtu", "Sore", "Easy run", "5 km"),
        ("5 Okt", "Minggu", "Pagi", "Long run", "10 km"),
    ], "32 km"),
    ("Minggu 2 (6-12 Okt)", [
        ("6 Okt", "Senin", "Pagi", "Easy run", "6 km"),
        ("7 Okt", "Selasa", "Pagi", "Interval 3x1000m", "7 km"),
        ("8 Okt", "Rabu", "Pagi", "Recovery run", "4 km"),
        ("9 Okt", "Kamis", "Malam", "Easy run", "6 km"),
        ("11 Okt", "Sabtu", "Sore", "Easy jog", "5 km"),
        ("12 Okt", "Minggu", "Pagi", "Long run", "12 km"),
    ], "40 km"),
    ("Minggu 3 (13-19 Okt)", [
        ("13 Okt", "Senin", "Pagi", "Easy run", "6 km"),
        ("14 Okt", "Selasa", "Pagi", "Tempo run", "8 km"),
        ("15 Okt", "Rabu", "Pagi", "Recovery jog", "5 km"),
        ("16 Okt", "Kamis", "Malam", "Easy run", "6 km"),
        ("18 Okt", "Sabtu", "Sore", "Easy jog", "4 km"),
        ("19 Okt", "Minggu", "Pagi", "Long run", "14 km"),
    ], "45 km"),
    ("Minggu 4 (20-26 Okt)", [
        ("20 Okt", "Senin", "Pagi", "Easy run", "6 km"),
        ("21 Okt", "Selasa", "Pagi", "Interval (6x400m)", "7 km"),
        ("22 Okt", "Rabu", "Pagi", "Recovery run", "4 km"),
        ("23 Okt", "Kamis", "Malam", "Easy run", "6 km"),
        ("25 Okt", "Sabtu", "Sore", "Easy jog", "5 km"),
        ("26 Okt", "Minggu", "Pagi", "Long run", "12 km"),
    ], "40 km"),
    ("Minggu 5 (27-31 Okt)", [
        ("27 Okt", "Senin", "Pagi", "Easy run", "6 km"),
        ("29 Okt", "Rabu", "Pagi", "Recovery jog", "4 km"),
        ("30 Okt", "Kamis", "Malam", "Easy jog", "3 km"),
    ], "13 km"),
]

# Buat PDF
pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

pdf.set_font("Arial", 'B', 14)
pdf.cell(0, 10, "Jadwal Lari Bulan Oktober 2025 (Target: 170 km)", ln=True, align='C')
pdf.ln(5)

for week_title, week_data, total_km in schedule_data:
    pdf.set_font("Arial", 'B', 12)
    pdf.cell(0, 10, f"{week_title} - Total: {total_km}", ln=True)

    # Header tabel
    pdf.set_font("Arial", 'B', 11)
    pdf.set_fill_color(200, 200, 200)
    pdf.cell(30, 8, "Tanggal", 1, 0, 'C', 1)
    pdf.cell(25, 8, "Hari", 1, 0, 'C', 1)
    pdf.cell(25, 8, "Waktu", 1, 0, 'C', 1)
    pdf.cell(80, 8, "Jenis Latihan", 1, 0, 'C', 1)
    pdf.cell(25, 8, "Jarak", 1, 1, 'C', 1)

    # Isi tabel
    pdf.set_font("Arial", '', 11)
    for row in week_data:
        pdf.cell(30, 8, row[0], 1)
        pdf.cell(25, 8, row[1], 1)
        pdf.cell(25, 8, row[2], 1)
        pdf.cell(80, 8, row[3], 1)
        pdf.cell(25, 8, row[4], 1, ln=True)
    pdf.ln(3)

# Simpan PDF
pdf.output("Jadwal_Lari_Oktober_2025.pdf")
