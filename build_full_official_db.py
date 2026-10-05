import os, sys, re, json
from pypdf import PdfReader

results_dir = r'c:\Users\karthik\Downloads\results'
files = sorted([f for f in os.listdir(results_dir) if f.endswith('.pdf')])

# Semester and date metadata mapping for each of the 19 PDFs
PDF_METADATA = {
    'B.TECH R23 I SEM REGULAR RESULTS MARCH 2024.pdf': {
        'sem_num': 1,
        'sem_code': 'sem1_reg_mar2024',
        'sem_title': 'I B.Tech I Semester (Regular R23)',
        'exam_type': 'Regular',
        'month_year': 'March 2024',
        'date_order': '2024-03',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2024/UG/R23/I-I-REG'
    },
    'B.TECH I SEM R23 REGULAR & SUPPLY JAN-2025.pdf': {
        'sem_num': 1,
        'sem_code': 'sem1_reg_jan2025',
        'sem_title': 'I B.Tech I Semester (Regular & Supplementary R23)',
        'exam_type': 'Regular',
        'month_year': 'January 2025',
        'date_order': '2025-01',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/I-I-REG'
    },
    'B.TECH I SEM (R23) SUPPLY RESULTS MAY 2025.pdf': {
        'sem_num': 1,
        'sem_code': 'sem1_sup_may2025',
        'sem_title': 'I B.Tech I Semester (Supplementary R23)',
        'exam_type': 'Supplementary',
        'month_year': 'May 2025',
        'date_order': '2025-05',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/I-I-SUPPLE'
    },
    'B.TECH I SEM R23 REGULAR & SUPPLY RESULTS DEC 2025.pdf': {
        'sem_num': 1,
        'sem_code': 'sem1_sup_dec2025',
        'sem_title': 'I B.Tech I Semester (Supplementary R23)',
        'exam_type': 'Supplementary',
        'month_year': 'December 2025',
        'date_order': '2025-12',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/I-I-SUPPLE-DEC'
    },
    'B.TECH I SEM (R23) SUPPLEMENTARY EXAMS RESULTS JUNE 2026.pdf': {
        'sem_num': 1,
        'sem_code': 'sem1_sup_jun2026',
        'sem_title': 'I B.Tech I Semester (Supplementary R23)',
        'exam_type': 'Supplementary',
        'month_year': 'June 2026',
        'date_order': '2026-06',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2026/UG/R23/I-I-SUPPLE'
    },
    'B.TECH II SEM R23 SUPPLY JAN-2025.pdf': {
        'sem_num': 2,
        'sem_code': 'sem2_sup_jan2025',
        'sem_title': 'I B.Tech II Semester (Supplementary R23)',
        'exam_type': 'Supplementary',
        'month_year': 'January 2025',
        'date_order': '2025-01',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/I-II-SUPPLE'
    },
    'B.TECH II SEM (R23) REGULAR & SUPPLY RESULTS MAY 2025.pdf': {
        'sem_num': 2,
        'sem_code': 'sem2_reg_may2025',
        'sem_title': 'I B.Tech II Semester (Regular R23)',
        'exam_type': 'Regular',
        'month_year': 'May 2025',
        'date_order': '2025-05',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/I-II-REG'
    },
    'B.TECH II SEM R23 SUPPLY RESULTS DEC 2025.pdf': {
        'sem_num': 2,
        'sem_code': 'sem2_sup_dec2025',
        'sem_title': 'I B.Tech II Semester (Supplementary R23)',
        'exam_type': 'Supplementary',
        'month_year': 'December 2025',
        'date_order': '2025-12',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/I-II-SUPPLE-DEC'
    },
    'B.TECH II SEM (R23) REGULAR & SUPPLEMENTARY EXAMS RESULTS JUNE 2026.pdf': {
        'sem_num': 2,
        'sem_code': 'sem2_reg_jun2026',
        'sem_title': 'I B.Tech II Semester (Autonomous R23)',
        'exam_type': 'Regular',
        'month_year': 'June 2026',
        'date_order': '2026-06',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2026/UG/R23/I-II-REG'
    },
    'B.TECH III SEM R23 REGULAR JAN-2025.pdf': {
        'sem_num': 3,
        'sem_code': 'sem3_reg_jan2025',
        'sem_title': 'II B.Tech I Semester (Regular R23)',
        'exam_type': 'Regular',
        'month_year': 'January 2025',
        'date_order': '2025-01',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/II-I-REG'
    },
    'B.TECH III SEM (R23) SUPPLY RESULTS MAY 2025.pdf': {
        'sem_num': 3,
        'sem_code': 'sem3_sup_may2025',
        'sem_title': 'II B.Tech I Semester (Supplementary R23)',
        'exam_type': 'Supplementary',
        'month_year': 'May 2025',
        'date_order': '2025-05',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/II-I-SUPPLE'
    },
    'B.TECH III SEM R23 REG & SUPPLY NOV 2025 RESULTS.pdf': {
        'sem_num': 3,
        'sem_code': 'sem3_reg_nov2025',
        'sem_title': 'II B.Tech I Semester (Regular R23)',
        'exam_type': 'Regular',
        'month_year': 'November 2025',
        'date_order': '2025-11',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/II-I-REG-NOV'
    },
    'B.TECH III SEM R23 SUPPLEMENTARY RESULTS May 2026.pdf': {
        'sem_num': 3,
        'sem_code': 'sem3_sup_may2026',
        'sem_title': 'II B.Tech I Semester (Supplementary R23)',
        'exam_type': 'Supplementary',
        'month_year': 'May 2026',
        'date_order': '2026-05',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2026/UG/R23/II-I-SUPPLE'
    },
    'B.TECH IV SEM (R23) REGULAR RESULTS MAY -2025.pdf': {
        'sem_num': 4,
        'sem_code': 'sem4_reg_may2025',
        'sem_title': 'II B.Tech II Semester (Regular R23)',
        'exam_type': 'Regular',
        'month_year': 'May 2025',
        'date_order': '2025-05',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/II-II-REG'
    },
    'B.Tech R23 IV Sem Supply results Dec -2025.pdf': {
        'sem_num': 4,
        'sem_code': 'sem4_sup_dec2025',
        'sem_title': 'II B.Tech II Semester (Supplementary R23)',
        'exam_type': 'Supplementary',
        'month_year': 'December 2025',
        'date_order': '2025-12',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/II-II-SUPPLE-DEC'
    },
    'B.TECH IV SEM R23 REGULAR & SUPPLEMENTARY RESULTS APRIL 2026.pdf': {
        'sem_num': 4,
        'sem_code': 'sem4_reg_apr2026',
        'sem_title': 'II B.Tech II Semester (Autonomous R23)',
        'exam_type': 'Regular',
        'month_year': 'April 2026',
        'date_order': '2026-04',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2026/UG/R23/II-II-REG'
    },
    'B.TECH V SEM R23 REG & SUPPLY NOV 2025 RESULTS.pdf': {
        'sem_num': 5,
        'sem_code': 'sem5_reg_nov2025',
        'sem_title': 'III B.Tech V Semester (Regular R23)',
        'exam_type': 'Regular',
        'month_year': 'November 2025',
        'date_order': '2025-11',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2025/UG/R23/III-V-REG'
    },
    'B.TECH V SEM R23 SUPPLEMENTARY RESULTS May 2026.pdf': {
        'sem_num': 5,
        'sem_code': 'sem5_sup_may2026',
        'sem_title': 'III B.Tech V Semester (Supplementary R23)',
        'exam_type': 'Supplementary',
        'month_year': 'May 2026',
        'date_order': '2026-05',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2026/UG/R23/III-V-SUPPLE'
    },
    'B.TECH VI SEM R23 REGULAR RESULTS APRIL 2026.pdf': {
        'sem_num': 6,
        'sem_code': 'sem6_reg_apr2026',
        'sem_title': 'III B.Tech VI Semester (Regular R23)',
        'exam_type': 'Regular',
        'month_year': 'April 2026',
        'date_order': '2026-04',
        'regulation': 'SVPP R23 (Autonomous)',
        'gazette_ref': 'SVPP/COE/2026/UG/R23/III-VI-REG'
    }
}

def parse_subject_line(line):
    parts = line.strip().split()
    if len(parts) < 4:
        return None
    code = parts[0]
    if len(code) < 7 or not (code[:2].isdigit() and code[2:4].isalpha()):
        return None
    
    idx = 1
    sno = None
    if parts[1].isdigit():
        sno = parts[1]
        idx = 2
    elif parts[1] == '*' and len(parts) > 2 and parts[2].isdigit():
        sno = parts[2]
        idx = 3

    res_idx = -1
    for k in range(idx, len(parts)):
        if parts[k].startswith('PASS') or parts[k].startswith('FAIL'):
            res_idx = k
            break
    if res_idx == -1:
        return None

    title_parts = parts[idx:res_idx]
    title = ' '.join(title_parts).replace('*', '').strip()

    res_token = parts[res_idx]
    if res_token.startswith('PASS'):
        status = 'PASS'
        creds_str = res_token[4:]
    else:
        status = 'FAIL'
        creds_str = res_token[4:]
    
    rest = parts[res_idx+1:]
    if not creds_str and rest:
        creds_str = rest[0]
        rest = rest[1:]

    try:
        credits = float(creds_str)
    except:
        credits = 0.0

    rest_str = ' '.join(rest)
    grade = 'F'
    internal = 0
    external = 0
    total = 0

    if rest_str.startswith('-Ab-'):
        grade = '-Ab-'
        after_gr = rest_str[4:].strip()
    elif rest and (rest[0] in ['O', 'A+', 'A', 'B+', 'B', 'C', 'D', 'E', 'F', 'S']):
        grade = rest[0]
        after_gr = ' '.join(rest[1:]).strip()
    else:
        m = re.match(r'^([A-S\+\-]+?)([0-9].*)$', rest[0])
        if m:
            grade = m.group(1)
            after_gr = m.group(2) + (' ' + ' '.join(rest[1:]) if len(rest) > 1 else '')
        else:
            after_gr = rest_str

    after_parts = after_gr.split()
    if len(after_parts) == 1:
        val = after_parts[0]
        if len(val) == 4 and val[:2] == val[2:]:
            internal = int(val[:2])
            total = int(val[:2])
            external = 0
        elif len(val) == 2:
            internal = int(val)
            total = int(val)
            external = 0
        else:
            try:
                internal = int(val)
                total = internal
            except:
                pass
    elif len(after_parts) >= 2:
        try:
            internal = int(after_parts[0])
            comb = after_parts[1]
            if comb == 'AB' or comb == '0AB':
                external = 'AB'
                total = internal
            elif comb.endswith('AB'):
                external = 'AB'
                total = int(comb[:-2]) if comb[:-2] else internal
            elif comb.endswith('0') and len(comb) > 2 and internal == int(comb[:-1]):
                total = internal
                external = 0
            else:
                found = False
                for i in range(1, len(comb)):
                    tot_s = comb[:i]
                    ext_s = comb[i:]
                    if int(tot_s) == internal + int(ext_s):
                        total = int(tot_s)
                        external = int(ext_s)
                        found = True
                        break
                if not found:
                    if len(comb) == 4:
                        total = int(comb[:2])
                        external = int(comb[2:])
                    else:
                        total = int(comb)
                        external = max(0, total - internal)
        except:
            pass

    points_map = {'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 4, 'E': 4, 'S': 10, 'F': 0, '-Ab-': 0}
    points = points_map.get(grade, 0)

    return {
        'code': code,
        'title': title,
        'name': title,
        'status': status,
        'credits': credits if status == 'PASS' else 0.0,
        'maxCredits': credits if credits > 0 else 3.0,
        'grade': grade,
        'points': points,
        'internal': internal,
        'external': external,
        'total': total,
        'isSupple': False,
        'isPdfRecord': True
    }

roll_pattern = re.compile(r'^([0-9]{2}[A-Z0-9]{2}[0-9A-Z]{6})\s+(.*)$')

students_db = {}
print('Starting complete extraction across all 19 PDFs...')

for f in files:
    path = os.path.join(results_dir, f)
    meta = PDF_METADATA.get(f)
    if not meta:
        print(f'Warning: No metadata mapping for {f}')
        continue

    reader = PdfReader(path)
    print(f'Processing {f} ({len(reader.pages)} pages)...')

    for p_idx, page in enumerate(reader.pages):
        text = page.extract_text() or ''
        # Quick check: does page have A43 or A42?
        if 'A43' not in text and 'A42' not in text:
            continue

        lines = [l.strip() for l in text.split('\n') if l.strip()]
        i = 0
        while i < len(lines):
            line = lines[i]
            m_roll = roll_pattern.match(line)
            if m_roll:
                r_num, r_name = m_roll.groups()
                # Strict Department Filter: AI (43) or AIML (42) only
                is_ai = ('A43' in r_num)
                is_aiml = ('A42' in r_num)
                if is_ai or is_aiml:
                    branch_code = '43' if is_ai else '42'
                    branch_title = 'B.Tech - Artificial Intelligence' if is_ai else 'B.Tech - Artificial Intelligence & Machine Learning'

                    if r_num not in students_db:
                        students_db[r_num] = {
                            'rollNo': r_num,
                            'name': r_name.strip(),
                            'branch': branch_title,
                            'branchCode': branch_code,
                            'semesters': {}
                        }
                    else:
                        if not students_db[r_num].get('name') or students_db[r_num]['name'].startswith('STUDENT'):
                            students_db[r_num]['name'] = r_name.strip()

                    # Collect subjects for this student
                    cur_subjects = []
                    cur_sgpa = 'N/A'
                    j = i + 1
                    while j < len(lines):
                        s_line = lines[j]
                        if s_line.startswith('SGPA'):
                            sgpa_m = re.search(r'SGPA\s*:\s*([0-9.]+)', s_line)
                            if sgpa_m:
                                cur_sgpa = sgpa_m.group(1)
                            break
                        if roll_pattern.match(s_line) or 'Controller of Examinations' in s_line:
                            break
                        parsed_sub = parse_subject_line(s_line)
                        if parsed_sub:
                            parsed_sub['isSupple'] = (meta['exam_type'] == 'Supplementary')
                            cur_subjects.append(parsed_sub)
                        j += 1

                    if cur_subjects:
                        tot_obt = sum(s['total'] for s in cur_subjects if isinstance(s['total'], int))
                        max_tot = len(cur_subjects) * 100
                        earned_cr = sum(s['credits'] for s in cur_subjects)
                        pct = f'{(tot_obt / max_tot * 100):.1f}%' if max_tot > 0 else '0.0%'
                        
                        has_backlogs = any(s['status'] == 'FAIL' or s['grade'] in ['F', '-Ab-'] for s in cur_subjects)
                        fail_count = sum(1 for s in cur_subjects if s['status'] == 'FAIL')
                        status_str = f'BACKLOGS DETECTED ({fail_count} Subject)' if has_backlogs else 'PASSED'

                        sem_key = meta['sem_code']
                        sem_title_up = meta['sem_title'].upper()
                        month_yr_up = meta['month_year'].upper()
                        students_db[r_num]['semesters'][sem_key] = {
                            'semesterId': sem_key,
                            'semesterNum': meta['sem_num'],
                            'semesterTitle': meta['sem_title'],
                            'examType': meta['exam_type'],
                            'examTitle': f'{branch_title.upper()} {sem_title_up} EXAMINATIONS {month_yr_up}',
                            'monthYear': meta['month_year'],
                            'dateOrder': meta['date_order'],
                            'regulation': meta['regulation'],
                            'sgpa': cur_sgpa,
                            'cgpa': cur_sgpa,
                            'status': status_str,
                            'results': cur_subjects,
                            'totalObtained': tot_obt,
                            'maxMarks': max_tot,
                            'percentage': pct,
                            'totalCredits': earned_cr,
                            'backlogsCount': sum(1 for s in cur_subjects if s['status'] == 'FAIL'),
                            'sourcePdf': f,
                            'gazetteRef': meta['gazette_ref']
                        }
            i += 1

print(f'Total AI / AIML students extracted: {len(students_db)}')

# Recompute chronological subject progression, active backlogs, and cumulative CGPA
for r_num, st in students_db.items():
    # Sort semesters chronologically by date_order then sem_num
    sorted_sems = sorted(
        st['semesters'].values(),
        key=lambda s: (s.get('dateOrder', '9999'), s.get('semesterNum', 99))
    )
    
    sub_history = {}
    tot_pts = 0
    tot_reg_cr = 0
    tot_earned_cr = 0
    tot_marks = 0
    tot_max = 0

    for sem in sorted_sems:
        results = sem.get('results', [])
        for sub in results:
            code = sub['code']
            is_fail = (sub['status'] == 'FAIL' or sub['grade'] in ['F', '-Ab-'])
            if code not in sub_history:
                sub_history[code] = {
                    'code': code,
                    'title': sub['title'],
                    'status': 'FAIL' if is_fail else 'PASS',
                    'grade': sub['grade'],
                    'lastSem': sem['semesterTitle']
                }
            else:
                sub_history[code]['lastSem'] = sem['semesterTitle']
                if not is_fail:
                    sub_history[code]['status'] = 'PASS'
                    sub_history[code]['grade'] = sub['grade']
                elif sub_history[code]['status'] != 'PASS':
                    sub_history[code]['status'] = 'FAIL'
                    sub_history[code]['grade'] = sub['grade']

        try:
            sgpa_val = float(sem.get('sgpa', 0))
            sem_cr = sum(s.get('maxCredits', 3.0) for s in results)
            tot_reg_cr += sem_cr
            tot_pts += sgpa_val * sem_cr
        except:
            pass

        tot_earned_cr += sem.get('totalCredits', 0)
        tot_marks += sem.get('totalObtained', 0)
        tot_max += sem.get('maxMarks', 0)

    active_backlogs = [s for s in sub_history.values() if s['status'] == 'FAIL']
    st['activeBacklogsList'] = active_backlogs
    st['totalBacklogs'] = len(active_backlogs)
    st['totalDegreeCredits'] = tot_earned_cr
    st['totalMarksObtained'] = tot_marks
    st['totalMaxMarks'] = tot_max
    st['overallPercentage'] = f'{(tot_marks / tot_max * 100):.1f}%' if tot_max > 0 else '0.0%'
    st['cgpa'] = f'{(tot_pts / tot_reg_cr):.2f}' if tot_reg_cr > 0 else '0.00'

# Save to parsed_official_results.json and official_results_db.js
with open('parsed_official_results.json', 'w', encoding='utf-8') as f_out:
    json.dump(students_db, f_out, indent=2)

js_content = 'window.SVPP_OFFICIAL_RESULTS = ' + json.dumps(students_db, indent=2) + ';\n'
with open('official_results_db.js', 'w', encoding='utf-8') as f_out:
    f_out.write(js_content)

print('Successfully written parsed_official_results.json and official_results_db.js!')

# Print summary for 24G01A4324
if '24G01A4324' in students_db:
    k_st = students_db['24G01A4324']
    print(f"\nSummary for 24G01A4324 ({k_st['name']}):")
    print(f"Total Semesters: {len(k_st['semesters'])}")
    print(f"CGPA: {k_st['cgpa']} | Total Backlogs: {k_st['totalBacklogs']}")
    for s_k, s_v in k_st['semesters'].items():
        print(f"  * {s_v['semesterTitle']} ({s_v['monthYear']}) - {len(s_v['results'])} subjects, SGPA: {s_v['sgpa']}")
