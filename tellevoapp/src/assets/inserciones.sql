CREATE TABLE IF NOT EXISTS chofer(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_chofer TEXT, 
    apellido_chofer TEXT
    -- rut_chofer TEXT,
    -- tipo_usuario TEXT,
    -- correo_electronico
);
INSERT or IGNORE INTO songtable(id, nombre_chofer, apellido_chofer) VALUES (1, 'Justin Bieber', 'Yummy');